import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUsersStore = defineStore('users', () => {
  const api = 'http://localhost:3000/';
  const users = ref();
  const user = ref();
  const authUser = ref();
  const loading = ref(false);
  const error = ref();

  async function fetchUsers() {
    users.value = [];
    loading.value = true;

    try {
      users.value = await fetch(`${api}users`).then(res => res.json());
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function fetchUser(id: number) {
    loading.value = true;

    try {
      user.value = await fetch(`${api}users/${id}`).then(res => res.json());
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function postUser(user: any) {
    loading.value = true;

    try {
      user.value = fetch(`${api}users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(() => {
          login(user.email, user.password);
        });
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function patchUser(userId: number, musicians: Array<number>) {
    loading.value = true;

    try {
      user.value = fetch(`${api}users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ myMusicians: musicians }),
      }).then(res => res.json());
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function login(email: string, password: string) {
    await fetchUsers();
    console.log(email, password);
    for (let i = 0; i < users.value.length; i++) {
      if (
        users.value[i].email === email &&
        users.value[i].password === password
      ) {
        localStorage.setItem('musicianAuthUser', users.value[i].id);
        authUser.value = users.value[i];
        location.href = '/dashboard';
        return true;
      }
    }
    return false;
  }

  function logOut() {
    localStorage.removeItem('musicianAuthUser');
    authUser.value = null;
  }

  async function checkAuthUser() {
    if (localStorage.getItem('musicianAuthUser')) {
      const userId: number = parseInt(localStorage.getItem('musicianAuthUser'));
      await fetchUser(userId);
      authUser.value = user;
    }
  }

  async function addMusician(user: any, musicianId: number) {
    const tempArray = user.myMusicians;
    tempArray.push(musicianId);
    await patchUser(user.id, tempArray);
  }

  async function removeMusician(user: any, musicianId: number) {
    console.log('remove');
    console.log(user, musicianId);
    const tempArray = user.myMusicians.filter((m: number) => m != musicianId);
    await patchUser(user.id, tempArray);
  }

  function hasMusician(user: any, musicianId: number) {
    if (user.myMusicians.includes(musicianId)) return true;
    return false;
  }

  return {
    users,
    user,
    authUser,
    loading,
    error,
    fetchUsers,
    fetchUser,
    postUser,
    login,
    checkAuthUser,
    logOut,
    addMusician,
    removeMusician,
    hasMusician,
  };
});
