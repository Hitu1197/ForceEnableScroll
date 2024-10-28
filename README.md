# ForceEnableScroll

This is a userscript which can forcefully enable scrolling on most websites.

Some website prevent users from scrolling in certain situations, especially after a paywall block or nsfw block (reddit lol). You can combo this script with your adblocker as a workaround for that!

Tested on: Firefox Mobile using Violentmonkey (Tampermonkey works too but not recommended)

# How to use
1. First install a userscript manager such as Violentmonkey
2. Then click on the + icon in the addon/extension's settings page
3. Now paste this code and save!

→ Next time you open a website this script will work by itself

→ You can verify this by the red colored number next to the addon

# FAQ

Q: How do I disable autoscroll and switch to just manual

A: Change the ```true``` value to ```false``` in 15th line


Q: I enabled autoscroll but it won't work

A: Some browsers or devices might load the websites slower than usual. For this change the ```automaticEnableDelay``` value in 16th line to a higher number


Q: I tried the thing above but autoscroll still doesn't work

A: Unless I know what is causing it I cannot fix it, but for a workaround you can select script in your manager and press 'Enable Scrolling' manually for bypassing the block.
