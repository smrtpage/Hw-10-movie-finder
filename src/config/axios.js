import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU1MzU4MmVmZjljMmU2NWZhMWQ1NTZmODE1ZjMyNiIsInN1YiI6IjY0OWIxNTBlMjk3NWNhMDBlN2U0YmUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CD354QOaA5y7V3o5cVPBi_mUcGccfVFBoY-Cvc6a8o`;
