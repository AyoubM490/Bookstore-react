const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
// const appId = 'DXx22TZCYfuKQX6UV8m5';

const getId = async () => {
  const response = await fetch(`${baseUrl}/apps/`, {
    method: 'POST',
  });
  const data = response.text();
  return data;
};

export default getId;
