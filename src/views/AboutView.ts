/* eslint-disable */
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue'
import { ElForm, ElMessageBox } from 'element-plus'
import axios from 'axios';
import * as ETMIPLUS_API from "@/api/ETMIPLUS_API_backup";


type FormInstance = InstanceType<typeof ElForm>

@Options({ components: {} })

export default class AboutView extends Vue {

	/*requestP = ETMIPLUS_API.Greetings_SayHi_Request;
	ETMIPLUS_API_Client = new ETMIPLUS_API.EtmiplusClient(process.env.VUE_APP_APIURL, axios);

	async mounted() {
	
		const result = await this.ETMIPLUS_API_Client.hi();
		console.log(result);
	}*/

}