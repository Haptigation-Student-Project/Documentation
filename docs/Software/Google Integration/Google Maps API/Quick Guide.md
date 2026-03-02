---
title: Quick Guide
description: Guide on how to get access to the Google Maps API key
hide_table_of_contents: true
sidebar_position: 1
---

# Get access to the Google Maps SDK

1. [Clone Github repository](https://github.com/Haptigation-Student-Project/Software)
2. Write a message to Jack-gits-your-hub to get access:
    - The message must contain these things:
        - The packagename of our application ('com.example.haptigationsw') --> can be found in or module:app 'build.gradle.kts'
        - Your personal SHA1 debugging key:
            1. Open the project within Android Studio and go to settings, experimental
            2. Click on the option 'Configure all Gradle Tasks during Gradle Sync' and save the settings
            3. On the top left click on File, then click on 'Sync Project with Gradle Files'
            4. On the right border click on 'Gradle', open 'Tasks', 'Android', (execute) 'Signingreport'
            5. After it completed copy the SHA1 key into your message
3. Jack-gits-your-hub creates a restriction for your key to access the API
4. Jack-gits-your-hub will send an encrypted message to you containing the API key (the api key is also within the [Github repository](https://github.com/Haptigation-Student-Project/Software) **secrets**)
5. Paste the API key into 'local.properties' with the name 'MAPS_API_KEY=*secret_key*'
6. Sync the project within Android Studio by clicking the button 'Sync Project with Gradle Files' on the right
7. You are ready to go and use the API!
