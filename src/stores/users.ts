import { defineStore } from 'pinia';
import { ref } from 'vue';

import type Musician from '../types/Musician';
import { useMusiciansStore } from './musicians';
const musiciansStore = useMusiciansStore();
const { fetchMusician } = useMusiciansStore();

export const useUsersStore = defineStore('users', () => {
  const api = 'http://localhost:3000/';
  const users = ref();
  const user = ref();
  const authUser = ref();
  const authUserMusicians = ref();
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

  async function patchMusician(musicianId: number, newPatrons: Array<number>) {
    loading.value = true;

    try {
      user.value = fetch(`${api}musicians/${musicianId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patrons: newPatrons }),
      }).then(res => res.json());
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function getAuthUserMusicians() {
    await checkAuthUser();
    const musicians = authUser.value.value.myMusicians;
    if (musicians) {
      if (musicians.length > 0) {
        authUserMusicians.value = new Array<Musician>();
        musicians.forEach(async (m: number) => {
          await fetchMusician(m);
          authUserMusicians.value.push(musiciansStore.musician);
        });
      }
    }
  }

  async function login(email: string, password: string) {
    await fetchUsers();
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
      return true;
    } else {
      return false;
    }
  }

  async function addMusician(user: any, musicianId: number) {
    let tempArray;
    if (user.myMusicians) {
      tempArray = user.myMusicians;
    } else {
      tempArray = new Array<number>();
    }
    tempArray.push(musicianId);
    await patchUser(user.id, tempArray);
    await fetchMusician(musicianId);
    tempArray = musiciansStore.musician.patrons;
    tempArray.push(user.id);
    await patchMusician(musicianId, tempArray);
  }

  async function removeMusician(user: any, musicianId: number) {
    let tempArray = user.myMusicians.filter((m: number) => m != musicianId);
    await patchUser(user.id, tempArray);
    await fetchMusician(musicianId);
    tempArray = musiciansStore.musician.patrons.filter(
      (m: number) => m != user.id
    );
    await patchMusician(musicianId, tempArray);
  }

  function hasMusician(user: any, musicianId: number) {
    if (user.myMusicians && user.myMusicians.includes(musicianId)) return true;
    return false;
  }

  return {
    users,
    user,
    authUser,
    authUserMusicians,
    loading,
    error,
    fetchUsers,
    fetchUser,
    postUser,
    getAuthUserMusicians,
    login,
    checkAuthUser,
    logOut,
    addMusician,
    removeMusician,
    hasMusician,
  };
});
