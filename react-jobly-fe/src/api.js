import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // DEPRECATED
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    // Create a safe version of data for logging that excludes passwords
    const safeData = this.getSafeDataForLogging(data);
    console.debug("API Call:", endpoint, safeData, method);

    const url = `${BASE_URL}/${endpoint}`;
    console.log(url);
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Helper method to create a safe version of data for logging
  static getSafeDataForLogging(data) {
    if (!data || typeof data !== 'object') return data;
    
    // Create a copy of the data to avoid modifying the original
    const safeData = { ...data };
    
    // Remove sensitive fields
    if ('password' in safeData) {
      safeData.password = '[REDACTED]';
    }
    
    return safeData;
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** makes api request for all companies
   *
   * returns response from api
   */
  static async getCompanies() {
    const res = await this.request('companies');
    return res.companies;
  }

  /**
   * makes api request for all companies with filters
   *
   * where filters is like:
   * { query: value }
   *
   * returns response from api
   */
  static async getCompaniesByName(filters) {
    let endpoint = 'companies?';
    if (filters.query.length) {
      endpoint += `name=${filters.query}`
    }

    const res = await this.request(endpoint);
    return res.companies;
  }

  /** makes api request for a specific job
   * where id is job id
   *
   * returns response from api
   */
  static async getJob(id) {
    const res = await this.request(`jobs/${id}`);
    return res;
  }

  /** makes api request for all jobs
   *
   * returns response from api
   */
  static async getJobs() {
    const res = await this.request(`jobs`);
    return res.jobs;
  }

  /**
   * makes api request for all jobs with filters
   *
   * where filters is like:
   * { query: value }
   *
   * returns jobs from response
   */
  static async getJobsByTitle(filters) {
    let endpoint = `jobs?`
    if (filters.query.length) {
      endpoint += `title=${filters.query}`
    }

    const res = await this.request(endpoint);
    return res.jobs;
  }

  /**
   * makes api request to get a user
   *
   * username => string
   *
   * returns user from response.
   */
  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }


  /**
   * makes api request to update user
   *
   * user => { firstName, lastName, email}
   * username => string
   *
   * returns user from response
   */
  static async updateUser(user, username) {
    const method = 'patch';
    const res = await this.request(`users/${username}`, user, method);
    return res.user;
  }

  /**
   * makes api request to register user
   *
   * user => {username, password, firstName, lastName, email}
   *
   * returns token from response
   * 
   * Security note: Password is only transmitted via HTTPS and never stored locally
   */
  static async registerUser(user) {
    const method = 'post';
    
    try {
      const res = await this.request(`auth/register`, user, method);
      // Clear sensitive data after use
      if (user && typeof user === 'object') {
        user.password = null;
      }
      return res.token;
    } catch (error) {
      // Clear sensitive data even on error
      if (user && typeof user === 'object') {
        user.password = null;
      }
      throw error;
    }
  }

  /**
   * makes api request to login user
   *
   * user => {username, password}
   *
   * returns token from response
   * 
   * Security note: Password is only transmitted via HTTPS and never stored locally
   */
  static async loginUser(user) {
    const method = 'post';
    
    try {
      const res = await this.request(`auth/token`, user, method);
      // Clear sensitive data after use
      if (user && typeof user === 'object') {
        user.password = null;
      }
      return res.token;
    } catch (error) {
      // Clear sensitive data even on error
      if (user && typeof user === 'object') {
        user.password = null;
      }
      throw error;
    }
  }
}

export default JoblyApi;