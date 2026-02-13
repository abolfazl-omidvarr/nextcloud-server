<script setup lang="ts">
import NcAppContent from '@nextcloud/vue/components/NcAppContent'
import NcContent from '@nextcloud/vue/components/NcContent'
import { onMounted, ref } from 'vue'
import { isDarkModeEnabled } from './utils/isDarkModeEnabled.ts'
import AnalogClock from './components/AnalogClock.vue'

const isDark = ref(isDarkModeEnabled())

onMounted(() => {
	isDark.value = isDarkModeEnabled()
})

</script>

<template>
	<NcContent app-name="simpledashboard">
		<NcAppContent :class="['content', { dark: isDark }]">
			<div class="content__notifications">
				<AnalogClock />
			</div>
		</NcAppContent>
	</NcContent>
</template>

<style lang="scss">
.content {
	background-color: #ffffff80 !important;
	backdrop-filter: blur(10px);

	&.dark {
		background-color: #000000aa !important;
	}

	&__notifications{
		padding: 1rem;
		width: 100%;
		height: 40%;
	}
}
</style>
