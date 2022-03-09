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
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
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
   * { fitler: query ...}
   *
   * returns response from api
   */
  static async getCompaniesByFilters(filters){
    let endpoint = `companies?`

    for(let filter in filters){
      endpoint.concat(`${filter}=${filters[filter]}&&`);
    }
    const res = await this.request(endpoint);
    return res.companies;
  }

  /** makes api request for specific job
   * where id is job id
   *
   * returns response from api
   */
  static async getJob(id){
    const res = await this.request(`jobs/${id}`);
    return res;
  }

  /** makes api request for all jobs
   *
   * returns response from api
   */
  static async getJobs(){
    const res = await this.request(`jobs`);
    return res.jobs;
  }

  /**
   * makes api request for all jobs with filters
   *
   * where filters is like:
   * { fitler: query ...}
   *
   * returns response from api
   */
  static async getJobsByFilter(filters){
    let endpoint = `jobs?`

    for(let filter in filters){
      endpoint.concat(`${filter}=${filters[filter]}&&`);
    }
    const res = await this.request(endpoint);
    return res.jobs;
  }

  // obviously, you'll add a lot here ...
}

export default JoblyApi;
