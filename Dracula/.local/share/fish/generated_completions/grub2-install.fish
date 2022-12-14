# grub2-install
# Autogenerated from man page /usr/share/man/man8/grub2-install.8.gz
complete -c grub2-install -l modules -d 'Pre-load modules specified by MODULES'
complete -c grub2-install -l install-modules -d 'Install only MODULES and their dependencies'
complete -c grub2-install -l themes -d 'Install THEMES.   The default is to install the starfield theme, if available'
complete -c grub2-install -l fonts -d 'Install FONTS.   The default is to install the unicode font'
complete -c grub2-install -l locales -d 'Install only locales listed in LOCALES'
complete -c grub2-install -l compress -d 'Compress GRUB files using the specified compression algorithm'
complete -c grub2-install -l directory -d 'Use images and modules in DIR'
complete -c grub2-install -l grub-mkimage -d 'Use FILE as grub-mkimage.   The default is /usr/bin/grub-mkimage'
complete -c grub2-install -l boot-directory -d 'Use DIR as the boot directory.   The default is /boot'
complete -c grub2-install -l target -d 'Install GRUB for TARGET platform'
complete -c grub2-install -l grub-setup -d 'Use FILE as grub-setup.   The default is /usr/bin/grub-setup'
complete -c grub2-install -l grub-mkrelpath -d 'Use FILE as grub-mkrelpath.   The default is /usr/bin/grub-mkrelpath'
complete -c grub2-install -l grub-probe -d 'Use FILE as grub-probe.   The default is /usr/bin/grub-mkrelpath'
complete -c grub2-install -l allow-floppy -d 'Make the device also bootable as a floppy'
complete -c grub2-install -l recheck -d 'Delete any existing device map and create a new one if necessary'
complete -c grub2-install -l force -d 'Install even if problems are detected'
complete -c grub2-install -l force-file-id -d 'Use identifier file even if UUID is available'
complete -c grub2-install -l disk-module -d 'Use MODULE for disk access'
complete -c grub2-install -l no-nvram -d 'Do not update the boot-device NVRAM variable'
complete -c grub2-install -l removable -d 'Treat the target device as if it is removeable'
complete -c grub2-install -l bootloader-id -d 'Use ID as the bootloader ID'
complete -c grub2-install -l efi-directory -d 'Use DIR as the EFI System Partition root'

