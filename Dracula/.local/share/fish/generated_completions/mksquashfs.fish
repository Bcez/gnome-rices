# mksquashfs
# Autogenerated from man page /usr/share/man/man1/mksquashfs.1.gz
complete -c mksquashfs -o tar -d 'read uncompressed tar file from standard in (stdin)'
complete -c mksquashfs -o no-strip -d 'act like tar, and do not strip leading directories from source files'
complete -c mksquashfs -o tarstyle -d 'alternative name for -no-strip'
complete -c mksquashfs -o cpiostyle -d 'act like cpio, and read files from standard in (stdin)'
complete -c mksquashfs -o cpiostyle0 -d 'like -cpiostyle, but filenames are null terminated'
complete -c mksquashfs -o comp -d 'select COMP compression'
complete -c mksquashfs -s b -d 'set data block to BLOCK_SIZE.   Default 128 Kbytes'
complete -c mksquashfs -o reproducible -d 'build filesystems that are reproducible (default)'
complete -c mksquashfs -o not-reproducible -d 'build filesystems that are not reproducible'
complete -c mksquashfs -o mkfs-time -d 'set filesystem creation timestamp to TIME, which is an unsigned 32-bit int in…'
complete -c mksquashfs -o fstime -d 'synonym for mkfs-time'
complete -c mksquashfs -o all-time -d 'set all file timestamps to TIME, which is an unsigned 32-bit int indicating s…'
complete -c mksquashfs -o no-exports -d 'don\'t make filesystem exportable via NFS (-tar default)'
complete -c mksquashfs -o exports -d 'make filesystem exportable via NFS (default)'
complete -c mksquashfs -o no-sparse -d 'don\'t detect sparse files'
complete -c mksquashfs -o no-xattrs -d 'don\'t store extended attributes'
complete -c mksquashfs -o xattrs -d 'store extended attributes (default)'
complete -c mksquashfs -o noI -d 'do not compress inode table'
complete -c mksquashfs -o noId -d 'do not compress the uid/gid table (implied by -noI)'
complete -c mksquashfs -o noD -d 'do not compress data blocks'
complete -c mksquashfs -o noF -d 'do not compress fragment blocks'
complete -c mksquashfs -o noX -d 'do not compress extended attributes'
complete -c mksquashfs -o no-tailends -d 'don\'t pack tail ends into fragments (default)'
complete -c mksquashfs -o tailends -d 'pack tail ends into fragments'
complete -c mksquashfs -o no-fragments -d 'do not use fragments'
complete -c mksquashfs -o always-use-fragments -d 'use fragment blocks for files larger than block size'
complete -c mksquashfs -o no-duplicates -d 'do not perform duplicate checking'
complete -c mksquashfs -o no-hardlinks -d 'do not hardlink files, instead store duplicates'
complete -c mksquashfs -o all-root -d 'make all files owned by root'
complete -c mksquashfs -o root-time -d 'set root directory time to TIME'
complete -c mksquashfs -o root-mode -d 'set root directory permissions to octal MODE'
complete -c mksquashfs -o root-uid -d 'set root directory owner to UID'
complete -c mksquashfs -o root-gid -d 'set root directory group to GID'
complete -c mksquashfs -o force-uid -d 'set all file uids to UID'
complete -c mksquashfs -o force-gid -d 'set all file gids to GID'
complete -c mksquashfs -o keep-as-directory -d 'if one source directory is specified, create a root directory containing that…'
complete -c mksquashfs -o action -d 'evaluate EXPRESSION on every file, and execute ACTION if it returns TRUE'
complete -c mksquashfs -o log-action -d 'as above, but log expression evaluation results and actions performed'
complete -c mksquashfs -o true-action -d 'as above, but only log expressions which return TRUE'
complete -c mksquashfs -o false-action -d 'as above, but only log expressions which return FALSE'
complete -c mksquashfs -o action-file -d 'as action, but read actions from FILE'
complete -c mksquashfs -o log-action-file -d 'as -log-action, but read actions from FILE'
complete -c mksquashfs -o true-action-file -d 'as -true-action, but read actions from FILE'
complete -c mksquashfs -o false-action-file -d 'as -false-action, but read actions from FILE. SS "Filesystem filter options:"'
complete -c mksquashfs -s p -d 'Add pseudo file definition'
complete -c mksquashfs -o pf -d 'Add list of pseudo file definitions'
complete -c mksquashfs -o sort -d 'sort files according to priorities in SORT_FILE'
complete -c mksquashfs -o ef -d 'list of exclude dirs/files.   One per line'
complete -c mksquashfs -o wildcards -d 'Allow extended shell wildcards (globbing) to be used in exclude dirs/files'
complete -c mksquashfs -o regex -d 'Allow POSIX regular expressions to be used in exclude dirs/files'
complete -c mksquashfs -o one-file-system -d 'Do not cross filesystem boundaries when scanning sources'
complete -c mksquashfs -o noappend -d 'do not append to existing filesystem'
complete -c mksquashfs -o root-becomes -d 'when appending source files/directories, make the original root become a subd…'
complete -c mksquashfs -o version -d 'print version, licence and copyright message'
complete -c mksquashfs -o exit-on-error -d 'treat normally ignored errors as fatal'
complete -c mksquashfs -o recover -d 'recover filesystem data using recovery file NAME'
complete -c mksquashfs -o no-recovery -d 'don\'t generate a recovery file'
complete -c mksquashfs -o recovery-path -d 'use NAME as the directory to store the recovery file'
complete -c mksquashfs -o quiet -d 'no verbose output'
complete -c mksquashfs -o info -d 'print files written to filesystem'
complete -c mksquashfs -o no-progress -d 'don\'t display the progress bar'
complete -c mksquashfs -o progress -d 'display progress bar when using the -info option'
complete -c mksquashfs -o throttle -d 'throttle the I/O input rate by the given percentage'
complete -c mksquashfs -o limit -d 'limit the I/O input rate to the given percentage'
complete -c mksquashfs -o processors -d 'Use NUMBER processors.   By default will use number of processors available'
complete -c mksquashfs -o mem -d 'Use SIZE physical memory'
complete -c mksquashfs -o nopad -d 'do not pad filesystem to a multiple of 4K'
complete -c mksquashfs -o offset -d 'Skip OFFSET bytes at the beginning of FILESYSTEM'
complete -c mksquashfs -s o -d 'synonym for -offset. SS "Miscellaneous options:"'
complete -c mksquashfs -o root-owned -d 'alternative name for -all-root'
complete -c mksquashfs -o noInodeCompression -d 'alternative name for -noI'
complete -c mksquashfs -o noIdTableCompression -d 'alternative name for -noId'
complete -c mksquashfs -o noDataCompression -d 'alternative name for -noD'
complete -c mksquashfs -o noFragmentCompression -d 'alternative name for -noF'
complete -c mksquashfs -o noXattrCompression -d 'alternative name for -noX'
complete -c mksquashfs -o help -d 'output this options text to stdout'
complete -c mksquashfs -s h -d 'output this options text to stdout'
complete -c mksquashfs -o Xhelp -d 'print compressor options for selected compressor'
complete -c mksquashfs -o Xcompression-level -d 'COMPRESSION-LEVEL should be 1 .  9 (default 9)'
complete -c mksquashfs -o Xwindow-size -d 'WINDOW-SIZE should be 8 .  15 (default 15)'
complete -c mksquashfs -o Xstrategy -d 'Compress using strategy1,strategy2,'
complete -c mksquashfs -o Xalgorithm -d 'Where ALGORITHM is one of: lzo1x_1, lzo1x_1_11, lzo1x_1_12, lzo1x_1_15, lzo1x…'
complete -c mksquashfs -o Xhc -d 'Compress using LZ4 High Compression.  xz:'
complete -c mksquashfs -o Xbcj -d 'Compress using filter1,filter2,'
complete -c mksquashfs -o Xdict-size -d 'Use DICT-SIZE as the XZ dictionary size'

