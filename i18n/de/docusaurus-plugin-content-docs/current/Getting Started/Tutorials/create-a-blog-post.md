---
sidebar_position: 3
---

# Blog-Post erstellen

Docusaurus erstellt **eine Seite für jeden Blog-Post**, aber auch eine **Blog-Indexseite**, ein **Tag-System**, einen **RSS**-Feed...

## Erstellen Sie Ihren ersten Post

Erstellen Sie eine Datei unter `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

Ein neuer Blog-Post ist jetzt verfügbar unter [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
