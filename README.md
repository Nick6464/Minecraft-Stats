# Minecraft Stats

This repository is to suppliment a Minecraft Statistics webpage I'm creating for me and my friends.

Previously, I had the webpage grab the the Google Sheet where the data was stored every time the page was loaded using AJAX.
The goal is to reduce load times to improve SEO by getting the statistics every 10 minutes, then ouputting them to a JSON file, thereby reducing load times as the Sheets API never needs t be called from the browser.

The Google Sheet is published, which means I don't need to use OAuth or have and Keys or Secrets to Access it. This should make it easy to find a package on npmjs to use.
