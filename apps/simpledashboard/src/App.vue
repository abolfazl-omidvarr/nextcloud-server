<script setup lang="ts">
import NcAppContent from '@nextcloud/vue/components/NcAppContent'
import NcContent from '@nextcloud/vue/components/NcContent'
import { onMounted, ref } from 'vue'
import { isDarkModeEnabled } from './utils/isDarkModeEnabled.ts'
import AnalogClock from './components/AnalogClock.vue'
import WidgetContainer from './components/WidgetContainer.vue'

const isDark = ref(isDarkModeEnabled())

onMounted(() => {
	isDark.value = isDarkModeEnabled()
})

</script>

<template>
	<NcContent app-name="simpledashboard">
		<NcAppContent :class="['content', { dark: isDark }]">
			<div class="content__info">
				<AnalogClock />
				<WidgetContainer />
				<WidgetContainer />
				<WidgetContainer />
			</div>
			<div class="content__apps">
				apps
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

	&__apps{
		height: 50%;
	}

	&__info {
		display: grid;
		padding: 1rem;
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		max-width: 1280px;
		height: 50%;
		gap: 1rem;
		margin: auto;
	}
}
</style>
