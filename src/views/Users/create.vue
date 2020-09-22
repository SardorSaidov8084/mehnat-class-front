<template>
	<CContainer class="c-app flex-column" :fluid="true">
		<router-link :to="{ name: 'UserIndex' }" class="mb-3">
			<CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
		</router-link>
		<CCard class="w-100 bg-white">
			<CCardHeader>
				Yangi foydalanuvchi yaratish
			</CCardHeader>
			<CCardBody class="justify-content-center">
				<FormUser :user="user" />
				<CButton color="primary float-right" @click="saveUser">
					<CIcon name="cil-user-plus" />Saqlash
				</CButton>
			</CCardBody>
		</CCard>
	</CContainer>
</template>
<script>
import FormUser from "./form";
export default {
	name: "UserCreate",
	components: {
		FormUser
	},
	data() {
		return {
			user: {
				id: "",
				fullname: "",
				username: "",
				status: "",
				password:"",
				age: "",
				role_id: null,
			}
		};
	},
	methods: {
		saveUser() {
			this.$api.post(`users`, { ...this.user }).then(res => {
				this.user = res.data.data;
				this.$router.push({ name: "UserIndex" });
			});
		}
	}
};
</script>
