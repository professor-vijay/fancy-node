#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
esac

"$basedir/../jsbarcode/bin/barcodes/EAN_UPC/UPCE.js"   "$@"
exit $?
