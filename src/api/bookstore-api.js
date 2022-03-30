export default class BookstoreApi {
  static baseURL =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

  static appId = 'suaQoZACLBtwlOREREix';

  static async getBooks() {
    const booksEndpoint = `${this.baseURL}/${this.appId}/books`;
    const response = await fetch(booksEndpoint);

    if (response.status !== 200) {
      throw new Error(
        'Can not fetch the books with the provided Endpoint',
      );
    }
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Can not get JSON from the response');
    }
  }

  static async addBook(itemId, title, author, category) {
    const booksEndpoint = `${this.baseURL}/${this.appId}/books`;
    const data = {
      item_id: itemId,
      title,
      author,
      category,
    };

    const response = await fetch(booksEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status < 200 || response.status > 299) {
      throw new Error(
        `Can not add the book with the id: ${itemId}`,
      );
    }
  }

  static async deleteBook(itemId) {
    const bookDeleteEndpoint = `${this.baseURL}/${this.appId}/books/${itemId}`;
    const data = {};
    data.item_id = itemId;

    const response = await fetch(bookDeleteEndpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status < 200 || response.status > 299) {
      throw new Error(
        `Can not delete the book with the id: ${itemId}`,
      );
    }
  }
}
