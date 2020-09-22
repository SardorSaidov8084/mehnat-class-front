<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <CCard>
        <CCardHeader>
            <CRow>
                <CCol sm="9">
                    <h4>Foydalanuvchilar ro'yxati</h4>
                </CCol>
                <CCol sm="3">
                    <router-link :to="{ name: 'UserCreate' }">
                        <CButton color="primary float-right" >
                            <CIcon name="cil-user-plus" /> Add
                        </CButton>
                    </router-link>
                </CCol>
            </CRow>
        </CCardHeader>
      <CCardBody>
        <CDataTable
          :items="items"
          :fields="fields"
          column-filter
          table-filter
          items-per-page-select
          :items-per-page="15"
          hover
          sorter
          pagination
        >
          <template #role="{item}">
            <td>
                {{ item.role ? item.role.name : '' }}
            </td>
          </template>
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">
                {{ item.status }}
              </CBadge>
            </td>
          </template>
          <template #show_details="{item}">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="updateUser(item.id)"
              >
                Tahrirlash
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
  </CContainer>
</template>

<script>
import { users as usersData } from "@/data/";
import { getBadge } from "@/utils/html";

export default {
	name: "Users",
	data() {
		return {
		items: [],
		fields: usersData.fields,
		details: [],
		collapseDuration: 0
		};
	},
	mounted() {
		this.$api("users").then(res => {
		this.items = res.data.data;
		});
	},
	methods: {
		getBadge,
		toggleDetails(item) {
			this.$set(this.items[item.id], "_toggled", !item._toggled);
			this.collapseDuration = 300;
			this.$nextTick(() => {
				this.collapseDuration = 0;
			});
		},
		updateUser(id) {
			this.$router.push({ name: "UserEdit", params: { id } });
		}
	}
};
</script>
