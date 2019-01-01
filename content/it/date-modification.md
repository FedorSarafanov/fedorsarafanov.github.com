---
layout: post
title:  "Смена времени модификации / создания файла в Linux"
date:   2017-01-02 14:35:05 +0300
aliases:
    - /linux/2017/01/02/date-modification.html
---

`touch -a -m -t 201701011212.00 fileName.ext`

где параметры:

`-a = accessed` (доступ)

`-m = modified` (модификация)

`-t = timestamp` (форматированное время: `[[CC]YY]MMDDhhmm[.ss]`)

<!--ed-->  