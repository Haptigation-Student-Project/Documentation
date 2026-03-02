---
title: Schnellanleitung
description: Anleitung zum Zugriff auf den Google Maps API-Schlüssel
hide_table_of_contents: true
sidebar_position: 1
---

# Zugriff auf das Google Maps SDK erhalten

1. [Github-Repository klonen](https://github.com/Haptigation-Student-Project/Software)
2. Schreiben Sie eine Nachricht an Jack-gits-your-hub, um Zugriff zu erhalten:
    - Die Nachricht muss Folgendes enthalten:
<<<<<<< HEAD
        - Den Paketnamen unserer Anwendung ('com.example.haptigationsw') --> zu finden in module:app 'build.gradle.kts'
=======
        - Den Paketnamen unserer Anwendung ('com.example.haptigationsw') --> zu finden in 'AndroidManifest.xml' oder module:app 'build.gradle.kts'
>>>>>>> deployment
        - Ihren persönlichen SHA1-Debugging-Schlüssel:
            1. Öffnen Sie das Projekt in Android Studio und gehen Sie zu Einstellungen, Experimentell
            2. Klicken Sie auf die Option 'Configure all Gradle Tasks during Gradle Sync' und speichern Sie die Einstellungen
            3. Klicken Sie oben links auf Datei, dann auf 'Sync Project with Gradle Files'
            4. Am rechten Rand auf 'Gradle' klicken, 'Tasks', 'Android' öffnen, (ausführen) 'Signingreport'
            5. Nach Abschluss kopieren Sie den SHA1-Schlüssel in Ihre Nachricht
3. Jack-gits-your-hub erstellt eine Einschränkung für Ihren Schlüssel, um auf die API zuzugreifen
<<<<<<< HEAD
4. Jack-gits-your-hub sendet Ihnen eine verschlüsselte Nachricht mit dem API-Schlüssel zu. (Der API-Schlüssel ist auch in den [Github repository](https://github.com/Haptigation-Student-Project/Software) **secrets**)
5. Fügen Sie den API-Schlüssel in 'local.properties' mit dem Namen 'MAPS_API_KEY=*secret_key*' ein
6. Synchronisieren Sie das Projekt in Android Studio, indem Sie auf die Schaltfläche 'Sync Project with Gradle Files' rechts klicken
7. Sie sind bereit, die API zu verwenden!
=======
4. Kopieren Sie den API-Schlüssel aus den [Github-Repository](https://github.com/Haptigation-Student-Project/Software) **secrets**
5. Fügen Sie den API-Schlüssel in 'local.properties' mit dem Namen 'MAPS_API_KEY=*secret_key*' ein
6. Synchronisieren Sie das Projekt in Android Studio, indem Sie auf die Schaltfläche 'Sync Project with Gradle Files' rechts klicken
7. Sie sind bereit, die API zu verwenden!
>>>>>>> deployment
