<template>
  <div class="container-fluid">
    <div class="header bg-secondary" >
      <div class="row m-2">
        <span class="mt-2 text-white "> <h3>Clients</h3> </span>
        <div class="col-md">
          <div class="d-flex justify-content-end m-1">
            <a
              type="button"
              class="btn btn-light text-primary"
              data-toggle="modal"
              href="#price-modal"
              @click="addClientClick()"
              >Add Client</a
            >
          </div>
        </div>
      </div>
    </div>
    <div v-show="client.clients.length == 0">
            <div class="card" >
      <div class="card-body">
         <h5>No record found in the system</h5>
           <div>
            <a
              type="button"
              class="btn btn-light text-white bg-primary"
              data-toggle="modal"
              href="#price-modal"
              @click="addClientClick()"
              >Add Client</a
            >
          </div>
      </div>
    </div>
    </div>
    <div class="card" v-show="client.clients.length > 0">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr class="bg-secondary text-white">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Provider</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-center text-capitalize"
                v-for="(client, index) in client.clients"
                :key="client._id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ client.name }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.phone }}</td>
                <td>{{ client.providers.name }}</td>
                <td>
                  <div
                    class="text-center d-inline"
                    style="width: 30px; height: 30px"
                  >
                    <a
                      href="#price-modal"
                      class="btn-sm bg-primary mr-1 text-white"
                      data-toggle="modal"
                      @click="updateclientClick(client)"
                    >
                      Edit
                    </a>
                  </div>
                  |
                  <div
                    class="text-center d-inline"
                    style="width: 30px; height: 30px"
                  >
                    <a
                      href="#"
                      class="btn-sm bg-danger text-white"
                      @click.prevent="deleteClient(client._id)"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="price-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-md-center" id="exampleModalLabel">
                <span class="text-primary" v-show="provider.providers.length == 0">Add Provider</span>
                <span class="text-primary" v-show="provider.providers.length > 0">{{ client.modalTitle }}</span>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div v-show="provider.providers.length > 0 ">
                     <div class="row mb-3">
                  <label for="name" class="col-sm-3 col-form-label">Name</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      v-model="client.name"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="email" class="col-sm-3 col-form-label"
                    >Email</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="name"
                      v-model="client.email"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="phone" class="col-sm-3 col-form-label"
                    >Phone</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      id="phone"
                      v-model="client.phone"
                    />
                  </div>
                </div>
                </div>
                <div class="row mb-3" v-show="client.name.length == 0">
                  <label for="phone" class="col-sm-3 col-form-label"
                    ></label
                  >
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      id="phone"
                      v-model="provider.name"
                      autocomplete="of" placeholder="Add provider here"
                    />
                  </div>
                  <div class="col-sm-4">
                    <button
                      type="button"
                      class="btn btn-primary ml-1"
                      @click="createProvider"
                    >
                      Add Provider
                    </button>
                  </div>
                </div>
                <div class="row mb-3" v-show="provider.providers.length > 0">
                  <label for="phone" class="col-sm-3 col-form-label"> Providers</label>
                  <div class="col-sm-9">
                    <select
                      multiple="true"
                      id="providers"
                      v-model="client.providers"
                      name="providers"
                      type="text"
                      class="form-control"
                    >
                      <option
                        v-for="provider in provider.providers"
                        :key="provider._id"
                        :value="provider._id"
                      >
                        {{ provider.name }}
                      </option>
                    </select>
                  </div>
                </div>
                
             
                <div class="col-md-12 text-right mt-5" v-show="provider.providers.length > 0"> 
                  <button
                    type="button"
                    class="btn btn-primary"
                    v-if="client.clientId == 0"
                    @click="creatClient"
                  >
                    Add Client
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    v-if="client.clientId != 0"
                    @click="updateClient(client.clientId)"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger ml-1"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClintComponent",

  data() {
    return {
      
      provider: {
        providers: [],
        mame: "",
      },
      client: {
        clients: [],
        modalTitle: "",
        clientId: 0,
        name: "",
        email: "",
        phone: "",
        providers: "",
      },
    };
  },

  methods: {
    clearTextBoxes() {
      return [
        (this.client.name = ""),
        (this.client.email = ""),
        (this.client.phone = ""),
      ];
    },

    addClientClick() {
      this.client.modalTitle = "Add New  Client";
    },

    updateclientClick(client) {
      (this.client.modalTitle = "Update  Client"),
        (this.client.clientId = client._id),
        (this.client.name = client.name),
        (this.client.email = client.email),
        (this.client.phone = client.phone);
      this.client.providers = client.providers;
    },

    getClients() {
      try {
        axios.get(`http://localhost:5000/api/clients/`).then((response) => {
          this.client.clients = response.data;
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    creatClient() {
      if (
        this.client.providers != "" &&
        this.client.email != "" &&
        this.client.name != "" &&
        this.client.phone != ""
      ) {
        try {
          axios
            .post(`http://localhost:5000/api/clients/`, {
              name: this.client.name,
              email: this.client.email,
              phone: this.client.phone,
              providers: this.client.providers,
            })
            .then((response) => {
              this.submitting = true;

              response.data;
              this.getClients();
              alert("Record save succesffully");
              this.clearTextBoxes();
            });
        } catch (error) {
          this.error = error.response.data.error;
        }
      } else {
        alert("Name, Email, Phone, Provider, field Required");
      }
    },

    updateClient(clientId) {
      try {
        axios
          .patch(`http://localhost:5000/api/clients/` + clientId, {
            name: this.client.name,
            email: this.client.email,
            phone: this.client.phone,
            providers: this.client.providers,
          })
          .then((response) => {
            alert("Record Updated  succesffully");
            response.data;
            location.reload()
          });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    deleteClient(id) {
      if (!confirm("Are You Sure To this record ?")) {
        return;
      }
      try {
        axios
          .delete(`http://localhost:5000/api/clients/` + id)
          .then((response) => {
            this.getClients();
            response.data;
          });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    getProviders() {
      try {
        axios.get(`http://localhost:5000/api/providers/`).then((response) => {
          this.provider.providers = response.data;
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    createProvider() {
      if (this.provider.name != "") {
        try {
          axios
            .post(`http://localhost:5000/api/providers/`, {
              name: this.provider.name,
            })
            .then((response) => {
              response.data;
              this.getProviders();
              alert("Record save succesffully");
              this.provider.name = "";
            });
        } catch (error) {
          this.error = error.response.data.error;
        }
      } else {
        alert("Providers Feild Is Empty");
      }
    },
  },

  mounted: function () {
    this.getClients();
    this.getProviders();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
