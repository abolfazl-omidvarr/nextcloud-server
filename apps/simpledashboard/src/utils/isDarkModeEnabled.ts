export const isDarkModeEnabled = () => {
	return window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches || document.body.dataset.themes === 'dark' || false
}
