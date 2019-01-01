---
layout: post
title:  "Создание загрузочной флешки с Windows из под (Arch)Linux"
date:   2017-01-05 14:35:05 +0300
aliases:
    - /linux/2017/01/05/windows-flash.html
---
Может понадобиться записать флешку с Windows, когда в наличии только Linux.

Приведенный способ наиболее легко применяется в системах ArchLinux и Manjaro, так как в их AUR репозиториях есть `ms-sys`. 
<!--more-->  

Для начала, установим необходимые утилиты (если они отсутствуют):
<bash title="~/"><!--
--><span class="ps">~</span>yaourt -S util-linux ntfs-3g ms-sys
</bash>  

Для дальнейших действий необходимо определить флешку. Сделать это можно либо через программу `GParted`, либо в консоли с помощью программы `df` в консоли. 
<bash title="~/"><!--
--><span class="ps">~</span>df
Файловая система Размер Использовано  Дост Использовано% Cмонтировано в
dev                1,9G            0  1,9G            0% /dev
run                1,9G         1,2M  1,9G            1% /run
/dev/sda4          188G          21G  158G           12% /
tmpfs              1,9G         162M  1,8G            9% /dev/shm
tmpfs              1,9G            0  1,9G            0% /sys/fs/cgroup
tmpfs              1,9G          24K  1,9G            1% /tmp
/dev/sda6          321M         256K  321M            1% /boot/efi
tmpfs              386M          12K  386M            1% /run/user/1000
/dev/sdb1           15G         3,7G   11G           26% /run/media/lab/USB DISK
</bash>  

В данном случае раздел на флешке имеет адрес `/dev/sdb1`, а сама флешка - `/dev/sdb`.

На всякий случай отмонтируем флешку, если она уже примонтирована:
<bash title="~/"><!--
--><span class="ps">~</span>sudo umount /dev/sdb1
[sudo] пароль для lab: 
</bash>  
Затем отформатируем флешку: 
<bash title="~/"><!--
--><span class="ps">~</span>sudo mkfs.ntfs -n 'Windows' /dev/sdb1
</bash>  
И примонтируем все что нужно:
<bash title="~/"><span class="comment">#Создадим папки, куда будут подключаться iso-образ и флешка:</span>
<span class="ps">~</span>sudo mkdir -p /mnt/{usb,iso}
<span class="ps">~</span>sudo chmod 777 /mnt/{usb,iso}
<span class="comment">#Монтируем iso-образ и флешку:</span>
<span class="ps">~</span>sudo mount -o loop ~/Загрузки/win7.iso /mnt/iso
<span class="ps">~</span>sudo mount /dev/sdb1 /mnt/usb
</bash>  
Теперь копируем все установочные файлы Windows:
<bash title="~/"><!--
--><span class="ps">~</span>cp -r /mnt/iso/* /mnt/usb/
</bash>

И устанавливаем загрузчик Windows 7 на флешку:
<bash title="~/"><!--
--><span class="ps">~</span>ms-sys -7 /dev/sdb
</bash> 
