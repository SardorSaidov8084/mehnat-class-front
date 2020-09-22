<template>
  <div>
    <CForm>
      <CRow>
        <CCol sm="8">
          <CRow>
            <CCol sm="12">
              <CInput
                label="F.I.O"
                placeholder="F.I.O"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.fullname"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Foydalanuvchi nomi"
                placeholder="Foydalanuvchi nomi"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.username"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Yoshi"
                placeholder="Yoshi"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.age"
              />
            </CCol>
			<CCol sm="12">
              <div class="form-group form-row">
                <label for="SelectStatus" class="col-form-label col-sm-4"
                  >Roli</label
                >
                <div class="col-sm-8">
                  <select
                    v-model="user.role_id"
                    class="form-control"
                    id="SelectRole"
					placeholder="Slect role"
                  >
                    <option
                      v-for="(role, index) in roles"
                      :key="'role-'+index"
                      :value="role.id"
                      >{{ role.name }}</option
                    >
                  </select>
                </div>
              </div>
            </CCol>
            <CCol sm="12">
              <div class="form-group form-row">
                <label for="SelectStatus" class="col-form-label col-sm-4"
                  >Status</label
                >
                <div class="col-sm-8">
                  <select
                    v-model="user.status"
                    class="form-control"
                    id="SelectStatus"
                  >
                    <option
                      v-for="(status, index) in statuses"
                      :key="index"
                      :value="status.value"
                      >{{ status.label }}</option
                    >
                  </select>
                </div>
              </div>
            </CCol>
            <CCol sm="12">
              <CInput
                label="Parol"
                placeholder="Parol"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.password"
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CForm>
  </div>
</template>
<script>
export default {
	name: "FormUser",
	props: {
		user: {
		type: Object,
		default() {
			return {};
		}
		}
	},
	data() {
		return {
			data: {
				label: "",
				model: "",
				array: ""
			},
			roles: [],
			statuses: [
				{ value: 1, label: "Active" },
				{ value: 0, label: "Banned" }
			]
		};
	},
	async mounted() {
		await this.fetchRoles();
	},
	methods:{
		fetchRoles(){
			this.$api("roles").then(res => {
				this.roles = res.data.result.data.roles;
			});	
		}
	}
};
</script>
