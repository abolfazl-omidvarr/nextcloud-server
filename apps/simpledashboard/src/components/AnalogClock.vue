<template>
	<div class="clock-container">
		<!-- Analog Clock -->
		<div class="clock-face">
			<!-- Hour Markers -->
			<div
				v-for="i in 12"
				:key="i"
				:style="hourMarkerStyle(i - 1)"
				class="hour-marker"
			></div>

			<!-- Hour Numbers -->
			<div
				v-for="(num, i) in [12, 3, 6, 9]"
				:key="num"
				:style="hourNumberStyle(i)"
				class="hour-number"
			>
				{{ num }}
			</div>

			<!-- Center Dot -->
			<div class="center-dot"></div>

			<!-- Hour Hand -->
			<div :style="handStyle(hourAngle, 'hour')" class="hand hour-hand"></div>
			<!-- Minute Hand -->
			<div :style="handStyle(minuteAngle, 'minute')" class="hand minute-hand"></div>
			<!-- Second Hand -->
			<div :style="handStyle(secondAngle, 'second')" class="hand second-hand"></div>
		</div>

		<!-- Date Display -->
		<div class="date-display">{{ formatDate(time) }}</div>
	</div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue';

const time = ref(new Date());

let timer: number;

onMounted(() => {
	timer = window.setInterval(() => {
		time.value = new Date();
	}, 1000);
});

onUnmounted(() => {
	clearInterval(timer);
});

const formatDate = (date: Date) => {
	return date.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

const hours = computed(() => time.value.getHours() % 12);
const minutes = computed(() => time.value.getMinutes());
const seconds = computed(() => time.value.getSeconds());

const secondAngle = computed(() => (seconds.value / 60) * 360);
const minuteAngle = computed(() => (minutes.value / 60) * 360 + (seconds.value / 60) * 6);
const hourAngle = computed(() => (hours.value / 12) * 360 + (minutes.value / 60) * 30);

const hourMarkerStyle = (i: number) => {
	const angle = (i * 30) * (Math.PI / 180);
	const x = Math.sin(angle) * 100;
	const y = -Math.cos(angle) * 100;
	return {
		transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
	};
};

const hourNumberStyle = (i: number) => {
	const angle = (i * 90) * (Math.PI / 180);
	const x = Math.sin(angle) * 85;
	const y = -Math.cos(angle) * 85;
	return {
		transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
	};
};

const handStyle = (angle: number, type: 'hour' | 'minute' | 'second') => {
	let width = '6px';
	let height = '60px';
	let color = 'white';
	let transition = 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)';

	if (type === 'minute') {
		width = '4px';
		height = '80px';
	} else if (type === 'second') {
		width = '2px';
		height = '90px';
		color = 'red';
		transition = seconds.value === 0 ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
	}

	return {
		width,
		height,
		backgroundColor: color,
		transform: `translate(-50%, -100%) rotate(${angle}deg)`,
		transition
	};
};
</script>

<style lang="scss">
.clock-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: var(--color-main-background);
	padding: 1rem;
	border-radius: 12px;
}

.clock-face {
	position: relative;
	width: 256px;
	height: 256px;
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(8px);
	border-radius: 50%;
	border: 4px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.hour-marker {
	position: absolute;
	width: 4px;
	height: 12px;
	background-color: rgba(255, 255, 255, 0.6);
	border-radius: 2px;
	left: 50%;
	top: 50%;
}

.hour-number {
	position: absolute;
	font-size: 18px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.8);
	left: 50%;
	top: 50%;
}

.center-dot {
	position: absolute;
	width: 16px;
	height: 16px;
	background-color: white;
	border-radius: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
}

.hand {
	position: absolute;
	left: 50%;
	top: 50%;
	transform-origin: bottom;
	border-radius: 3px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.date-display {
	font-size: 20px;
	color: rgba(255, 255, 255, 0.9);
	text-align: center;
}
</style>
