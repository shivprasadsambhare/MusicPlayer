import axios from 'axios';

export const GET = url => axios.get(url, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer BQC8tm8mDlXVZjkP71eykn6ea6gRORWkIm5S18osD91zaMaA5BRBC7-tcYGYwtJ1XjqcvxqX4n83j1G8hGGtfJz7i5OMJBxFCOL8Qi4oBNrTQtXN_SwGKUOHWaT_4u-N4FsSsHB6qwtoHzFkCY809PAVxZb7rLxcMqM',
  },
});
