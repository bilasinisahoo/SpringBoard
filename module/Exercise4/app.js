
async function loadConfig(theme) {

  const themeModule = await import("./theme.mjs");

	const currentHour = new Date().getHours();

	if (currentHour < 18)
	{
		themeModule.setLightTheme();
	}
	else
	{
		themeModule.setDarkTheme();
	}

    // Execute the function
loadConfig()
    
}