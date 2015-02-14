# JSCompressor
JSCompressor is designed for compress javascript files with high performance and speed.

## Bit architecture
It will order all bytes in ascii type. Then sort all bytes by size.
```
Input  : 102, 117, 110, 99, 116, 105, 111, 110
Output : 99, 102, 105, 110, 110, 111, 116, 117
```
And program will apply difference for all bytes, output will be like that :
```
Output : 0, 3, 5, 0, 1, 5, 1
```
Bit architecture >
```
|HEAD|BT|BT|BT|BT|
-----------------
|0000|00|00|00|00|
-----------------
```
