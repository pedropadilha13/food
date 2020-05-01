import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer r74Nw-GoBYPAwGe9EFfU3guhZySE2YASHvXt30R-TnX-g_lyYMvA6NbZv5mbIgVUSHH0ndrqjl-LCM10vTvw0nt3r7xIfTIQ9EVswM-EywqGAT8mZK4Jd7w7yAesXnYx'
  }
});
