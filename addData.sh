#!/bin/sh

# WARNING: This program may take hours to run. Be patient please.

echo "Processing Data";
mongoimport --host=127.0.0.1 \
	--file ./sample_data/pairs.json \
	-d ocamlprograms \
	-c pairs;

