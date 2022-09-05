# mkhybrid
# Autogenerated from man page /usr/share/man/man1/mkhybrid.1.gz
complete -c mkhybrid -o abstract -d 'Specifies the abstract filename.   There is space for 37 characters'
complete -c mkhybrid -o appid -d 'Specifies a text string that will be written into the volume header'
complete -c mkhybrid -o allow-limited-size -d 'When processing files larger than 2GiB which cannot be easily represented in …'
complete -c mkhybrid -o ldots -d 'Allow ISO9660 filenames to begin with a period'
complete -c mkhybrid -o allow-lowercase -d 'This options allows lowercase characters to appear in ISO9660 filenames'
complete -c mkhybrid -o allow-multidot -d 'This options allows more than one dot to appear in ISO9660 filenames'
complete -c mkhybrid -o biblio -d 'Specifies the bibliographic filename.   There is space for 37 characters'
complete -c mkhybrid -o no-cache-inodes -d 'Enable or disable caching inode and device numbers to find hard links to files'
complete -c mkhybrid -o alpha-boot -d 'Specifies the path and filename of the boot image to be used when making an A…'
complete -c mkhybrid -o hppa-bootloader -d 'Specifies the path and filename of the boot image to be used when making an H…'
complete -c mkhybrid -o hppa-cmdline -d 'Specifies the command line to be passed to the HPPA boot loader when making a…'
complete -c mkhybrid -o hppa-kernel-64 -d 'Specifies the path and filename of the 32-bit and/or 64-bit kernel images to …'
complete -c mkhybrid -o hppa-ramdisk -d 'Specifies the path and filename of the ramdisk image to be used when making a…'
complete -c mkhybrid -o mips-boot -d 'Specifies the path and filename of the boot image to be used when making an S…'
complete -c mkhybrid -o mipsel-boot -d 'Specifies the path and filename of the boot image to be used when making an D…'
complete -c mkhybrid -o sparc-boot -d 'Specifies a comma-separated list of boot images that are needed to make a boo…'
complete -c mkhybrid -s G -d 'Specifies the path and filename of the generic boot image to be used when mak…'
complete -c mkhybrid -o eltorito-boot -d 'Specifies the path and filename of the boot image to be used when making an E…'
complete -c mkhybrid -o eltorito-alt-boot -d 'Start with a new set of El Torito boot parameters'
complete -c mkhybrid -o hard-disk-boot -d 'Specifies that the boot image used to create El Torito bootable CDs is a hard…'
complete -c mkhybrid -o no-emul-boot -d 'Specifies that the boot image used to create El Torito bootable CDs is a "no …'
complete -c mkhybrid -o no-boot -d 'Specifies that the created El Torito CD should be marked as not bootable'
complete -c mkhybrid -o boot-load-seg -d 'Specifies the load segment address of the boot image for no-emulation El Tori…'
complete -c mkhybrid -o boot-load-size -d 'Specifies the number of "virtual" (512-byte) sectors to load in no-emulation …'
complete -c mkhybrid -o boot-info-table -d 'Specifies that a 56-byte table with information of the CD-ROM layout will be …'
complete -c mkhybrid -o cdrecord-params -d 'This option is needed to create a CD Extra or the image of a second session o…'
complete -c mkhybrid -o eltorito-catalog -d 'Specifies the path and filename of the boot catalog, which is required for an…'
complete -c mkhybrid -o check-oldnames -d 'Check all filenames imported from the old session for compliance with the ISO…'
complete -c mkhybrid -o check-session -d 'Check all old sessions for compliance with actual  genisoimage  ISO9660 file …'
complete -c mkhybrid -o checksum_algorithm_iso -d 'Specify the checksum types desired for the output image'
complete -c mkhybrid -o checksum_algorithm_template -d 'Specify the checksum types desired for the output jigdo template'
complete -c mkhybrid -o copyright -d 'Specifies copyright information, typically a filename on the disc'
complete -c mkhybrid -o omit-period -d 'Do not append a period to files that do not have one'
complete -c mkhybrid -o disable-deep-relocation -d 'Do not use deep directory relocation, and instead just pack them in the way w…'
complete -c mkhybrid -o debug -d 'Set debug flag'
complete -c mkhybrid -o dir-mode -d 'Overrides the mode of directories used to create the image to R mode , specif…'
complete -c mkhybrid -o dvd-video -d 'Generate a DVD-Video compliant UDF filesystem'
complete -c mkhybrid -o efi-boot -d 'Set EFI boot image name'
complete -c mkhybrid -o follow-links -d 'Follow symbolic links when generating the filesystem'
complete -c mkhybrid -o file-mode -d 'Overrides the mode of regular files used to create the image to R mode , spec…'
complete -c mkhybrid -o gid -d 'Overrides the group ID read from the source files to the value of R gid '
complete -c mkhybrid -o gui -d 'Switch the behaviour for a GUI'
complete -c mkhybrid -o graft-points -d 'Allow use of graft points for filenames'
complete -c mkhybrid -o hide -d 'Hide any files matching R glob , a shell wildcard pattern, from being seen in…'
complete -c mkhybrid -o hide-list -d 'A file containing a list of shell wildcards to be hidden.   See  -hide '
complete -c mkhybrid -o hidden -d 'Add the hidden (existence) ISO9660 directory attribute for files and director…'
complete -c mkhybrid -o hidden-list -d 'A file containing a list of shell wildcards to get the hidden attribute'
complete -c mkhybrid -o hide-joliet -d 'Hide files and directories matching R glob , a shell wildcard pattern, from b…'
complete -c mkhybrid -o hide-joliet-list -d 'A file containing a list of shell wildcards to be hidden from the Joliet tree'
complete -c mkhybrid -o hide-joliet-trans-tbl -d 'Hide the  TRANS. TBL files from the Joliet tree'
complete -c mkhybrid -o hide-rr-moved -d 'Rename the directory  RR_MOVED to  . rr_moved in the Rock Ridge tree'
complete -c mkhybrid -o input-charset -d 'Input charset that defines the characters used in local filenames'
complete -c mkhybrid -o output-charset -d 'Output charset that defines the characters that will be used in Rock Ridge fi…'
complete -c mkhybrid -o iso-level -d 'Set the ISO9660 conformance level.  Valid numbers are 1 to 4'
complete -c mkhybrid -s J -d 'Generate Joliet directory records in addition to regular ISO9660 filenames'
complete -c mkhybrid -o joliet-long -d 'Allow Joliet filenames to be up to 103 Unicode characters, instead of 64'
complete -c mkhybrid -o jcharset -d 'A combination of  -J -input-charset R charset '
complete -c mkhybrid -o full-iso9660-filenames -d 'Allow full 31-character filenames'
complete -c mkhybrid -s L -d 'Outdated option; use  -allow-leading-dots instead'
complete -c mkhybrid -o jigdo-jigdo -d 'Produce a  jigdo  . jigdo metadata file as well as the filesystem image'
complete -c mkhybrid -o jigdo-template -d 'Produce a  jigdo  . template file as well as the filesystem image'
complete -c mkhybrid -o jigdo-min-file-size -d 'Specify the minimum size for a file to be listed in the  . jigdo file'
complete -c mkhybrid -o jigdo-force-md5 -d 'Specify a file pattern where files  must be contained in the externally-suppl…'
complete -c mkhybrid -o jigdo-exclude -d 'Specify a file pattern where files will not be listed in the  . jigdo file'
complete -c mkhybrid -o jigdo-map -d 'Specify a pattern mapping for the jigdo file (e. g'
complete -c mkhybrid -o md5-list -d 'Specify a file containing the MD5sums, sizes and pathnames of the files to be…'
complete -c mkhybrid -o jigdo-template-compress -d 'Specify a compression algorithm to use for template date'
complete -c mkhybrid -o log-file -d 'Redirect all error, warning and informational messages to  log_file instead o…'
complete -c mkhybrid -s m -d 'Exclude files matching R glob , a shell wildcard pattern, from being written …'
complete -c mkhybrid -o exclude-list -d 'A file containing a list of shell wildcards to be excluded.   See  -m '
complete -c mkhybrid -o max-iso9660-filenames -d 'Allow ISO9660 filenames to be up to 37 characters long'
complete -c mkhybrid -o dev -d 'Specifies path to existing ISO9660 image to be merged'
complete -c mkhybrid -o omit-version-number -d 'Omit version numbers from ISO9660 filenames'
complete -c mkhybrid -o new-dir-mode -d 'Specify the mode, a 4-digit number as used in  chmod (1), to use when creatin…'
complete -c mkhybrid -o no-bak -d 'Exclude backup files files on the ISO9660 filesystem; that is, filenames that…'
complete -c mkhybrid -o force-rr -d 'Do not use the automatic Rock Ridge attributes recognition for previous sessi…'
complete -c mkhybrid -o no-rr -d 'Do not use the Rock Ridge attributes from previous sessions'
complete -c mkhybrid -o no-split-symlink-components -d 'Don\'t split the symlink components, but begin a new Continuation Area (CE) in…'
complete -c mkhybrid -o no-split-symlink-fields -d 'Don\'t split the symlink fields, but begin a new Continuation Area (CE) instead'
complete -c mkhybrid -s o -d 'Specify the output file for the the ISO9660 filesystem image'
complete -c mkhybrid -o pad -d 'Pad the end of the whole image by 150 sectors (300 kB)'
complete -c mkhybrid -o no-pad -d 'Do not pad the end by 150 sectors (300 kB) and do not make the the boot parti…'
complete -c mkhybrid -o path-list -d 'A file containing a list of  pathspec directories and filenames to be added t…'
complete -c mkhybrid -s P -d 'Outdated option; use  -publisher instead'
complete -c mkhybrid -o publisher -d 'Specifies a text string that will be written into the volume header'
complete -c mkhybrid -o preparer -d 'Specifies a text string that will be written into the volume header'
complete -c mkhybrid -o print-size -d 'Print estimated filesystem size in multiples of the sector size (2048 bytes) …'
complete -c mkhybrid -o quiet -d 'This makes  genisoimage even less verbose'
complete -c mkhybrid -o rock -d 'Generate SUSP and RR records using the Rock Ridge protocol to further describ…'
complete -c mkhybrid -o rational-rock -d 'This is like the -R option, but file ownership and modes are set to more usef…'
complete -c mkhybrid -o relaxed-filenames -d 'Allows ISO9660 filenames to include all 7-bit ASCII characters except lowerca…'
complete -c mkhybrid -o root -d 'Moves all files and directories into  dir in the image'
complete -c mkhybrid -o old-root -d 'This option is necessary when writing a multisession image and the previous (…'
complete -c mkhybrid -o sectype -d 'Set output sector type to e. g.  data/xa1/raw'
complete -c mkhybrid -o sort -d 'Sort file locations on the media'
complete -c mkhybrid -o sparc-label -d 'Set the Sun disk label name for the Sun disk label that is created with  -spa…'
complete -c mkhybrid -o split-output -d 'Split the output image into several files of approximately 1 GB each'
complete -c mkhybrid -o stream-media-size -d 'Select streaming operation and set the media size to # sectors'
complete -c mkhybrid -o stream-file-name -d 'Reserved for future use'
complete -c mkhybrid -o sunx86-boot -d 'Specifies a comma-separated list of filesystem images that are needed to make…'
complete -c mkhybrid -o sunx86-label -d 'Set the SVr4 disk label name for the SVr4 disk label that is created with  -s…'
complete -c mkhybrid -o sysid -d 'Specifies the system ID.   There is space for 32 characters'
complete -c mkhybrid -o translation-table -d 'Generate a file  TRANS'
complete -c mkhybrid -o table-name -d 'Alternative translation table filename (see above).  Implies  -T '
complete -c mkhybrid -o ucs-level -d 'Set Unicode conformance level in the Joliet SVD.  The default level is 3'
complete -c mkhybrid -o udf -d 'Include UDF filesystem support in the generated filesystem image'
complete -c mkhybrid -o uid -d 'Overrides the uid read from the source files to the value of R uid '
complete -c mkhybrid -o use-fileversion -d 'The option   -use-fileversion allows  genisoimage to use file version numbers…'
complete -c mkhybrid -o untranslated-filenames -d 'Allows "untranslated" filenames, completely violating the ISO9660 standards d…'
complete -c mkhybrid -o no-iso-translate -d 'Do not translate the characters `#\' and `~\' which are invalid for ISO9660 fil…'
complete -c mkhybrid -s V -d 'Specifies the volume ID (volume name or label) to be written into the master …'
complete -c mkhybrid -o volset -d 'Specifies the volume set ID.   There is space for 128 characters'
complete -c mkhybrid -o volset-size -d 'Sets the volume set size to #'
complete -c mkhybrid -o volset-seqno -d 'Sets the volume set sequence number to #'
complete -c mkhybrid -o verbose -d 'Verbose execution'
complete -c mkhybrid -s x -d 'Identical to  -m R glob '
complete -c mkhybrid -o XA -d 'Generate XA directory attruibutes'
complete -c mkhybrid -o xa -d 'Generate rationalized XA directory attruibutes'
complete -c mkhybrid -s A
complete -c mkhybrid -o allow-leading-dots
complete -c mkhybrid -o cache-inodes
complete -c mkhybrid -o hppa-kernel-32
complete -c mkhybrid -s B
complete -c mkhybrid -s b
complete -c mkhybrid -s C
complete -c mkhybrid -s M -d 'genisoimage will create a filesystem image that is intended to be a continuat…'
complete -c mkhybrid -s c
complete -c mkhybrid -s d
complete -c mkhybrid -s D
complete -c mkhybrid -s e
complete -c mkhybrid -s f
complete -c mkhybrid -s l
complete -c mkhybrid -s N -d 'as the extra name space is taken from the space reserved for file version num…'
complete -c mkhybrid -o nobak
complete -c mkhybrid -s p
complete -c mkhybrid -s R
complete -c mkhybrid -s r
complete -c mkhybrid -s s
complete -c mkhybrid -s T
complete -c mkhybrid -s U
complete -c mkhybrid -s v
complete -c mkhybrid -s z
complete -c mkhybrid -o transparent-compression -d 'Generate special RRIP records for transparently compressed files'
complete -c mkhybrid -o hfs -d 'Create an ISO9660/HFS hybrid CD'
complete -c mkhybrid -o map
complete -c mkhybrid -o magic -d 'and/or the various double dash options given below'
complete -c mkhybrid -o apple -d 'Create an ISO9660 CD with Apple\'s extensions.  Similar to'
complete -c mkhybrid -o hfs-creator -d 'Set the default CREATOR for all files.  Must be exactly 4 characters'
complete -c mkhybrid -o hfs-type -d 'Set the default TYPE for all files.  Must be exactly 4 characters'
complete -c mkhybrid -o probe -d 'Search the contents of files for all the known Apple/Unix file formats'
complete -c mkhybrid -o no-desktop -d 'Do not create (empty) Desktop files'
complete -c mkhybrid -o mac-name -d 'Use the HFS filename as the starting point for the ISO9660, Joliet and Rock R…'
complete -c mkhybrid -o boot-hfs-file -d 'Installs the driver_file that may make the CD bootable on a Macintosh'
complete -c mkhybrid -o part -d 'Generate an HFS partition table'
complete -c mkhybrid -o auto -d 'Make the HFS CD use the QuickTime 2'
complete -c mkhybrid -o cluster-size -d 'Set the size in bytes of the cluster or allocation units of PC Exchange files'
complete -c mkhybrid -l exchange -d 'See the HFS MACINTOSH FILE FORMATS section below'
complete -c mkhybrid -o hide-hfs -d 'Hide glob , a shell wildcard pattern, from the HFS volume'
complete -c mkhybrid -o hide-hfs-list -d 'Specify a file containing a list of wildcard patterns to be hidden as in'
complete -c mkhybrid -o hfs-volid -d 'Volume name for the HFS partition'
complete -c mkhybrid -o icon-position -d 'Use the icon position information, if it exists, from the Apple/Unix file'
complete -c mkhybrid -o root-info -d 'Set the location, size on screen, scroll positions, folder View etc'
complete -c mkhybrid -o prep-boot -d 'PReP boot image file.  Up to 4 are allowed.  See README'
complete -c mkhybrid -o chrp-boot -d 'Add CHRP boot header'
complete -c mkhybrid -o input-hfs-charset -d 'Input charset that defines the characters used in HFS filenames when used with'
complete -c mkhybrid -o output-hfs-charset -d 'Output charset that defines the characters that will be used in the HFS filen…'
complete -c mkhybrid -o hfs-unlock -d 'By default, genisoimage will create an HFS volume that is locked'
complete -c mkhybrid -o hfs-bless -d '"Bless" the given directory (folder)'
complete -c mkhybrid -o hfs-parms -d 'Override certain parameters used to create the HFS filesystem'
complete -c mkhybrid -l cap -d 'Look for AUFS CAP Macintosh files'
complete -c mkhybrid -l netatalk -d 'Look for NETATALK Macintosh files'
complete -c mkhybrid -l double -d 'Look for AppleDouble Macintosh files'
complete -c mkhybrid -l ethershare -d 'Look for Helios EtherShare Macintosh files'
complete -c mkhybrid -l ushare -d 'Look for IPT UShare Macintosh files'
complete -c mkhybrid -l sgi -d 'Look for SGI Macintosh files'
complete -c mkhybrid -l xinet -d 'Look for XINET Macintosh files'
complete -c mkhybrid -l macbin -d 'Look for MacBinary Macintosh files'
complete -c mkhybrid -l single -d 'Look for AppleSingle Macintosh files'
complete -c mkhybrid -l dave -d 'Look for Thursby Software Systems DAVE Macintosh files'
complete -c mkhybrid -l sfm -d 'Look for Microsoft\'s Services for Macintosh files (NT only) (Alpha)'
complete -c mkhybrid -l osx-double -d 'Look for Mac OS X AppleDouble Macintosh files'
complete -c mkhybrid -l osx-hfs -d 'Look for Mac OS X HFS Macintosh files'

