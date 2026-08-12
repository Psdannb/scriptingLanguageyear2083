<?php
/*
File handling in PHP refers to the process of creating, opening, reading, writing, appending, copying, renaming, and deleting files using PHP

#Opening a File
The fopen() function is used to open a file.
synatx: fopen(filename, mode);
Example: $file = fopen("student.txt", "r");


#File Opening Modes
PHP provides different modes for opening files.
- r: Read only; file must exist
-r+: Read and write; file must exist
-w:Write only; creates file or clears existing file
-w+: Read and write; creates or clears file
-a: Append; creates file if it doesn't exist
-a+: Read and append

#Closing a File
After working with a file, it should be closed using fclose().
example: 
$file = fopen("student.txt", "r");

// perform file operations
fclose($file);
-closing files helps release system resources.


#Writing to a File
The fwrite() function writes data to an opened file.
 example: 
 $file = fopen("student.txt", "w");

fwrite($file, "Name: Ram\n");
fwrite($file, "Faculty: BCA\n");

fclose($file);

#Reading a File

The fread() function reads a specified number of bytes from a file.
syntax: fread(file, length);
example: 
$file = fopen("student.txt", "r");

$content = fread($file, filesize("student.txt"));

echo $content;

fclose($file);

#Reading a File Using fgets()
fgets() reads one line at a time from a file.
Example:
 $file = fopen("student.txt", "r");

echo fgets($file);
echo fgets($file);

fclose($file);

=>PHP provides a simpler function for reading an entire file and that is  file_get_contents()
example:
$content = file_get_contents("student.txt");

echo $content;


=>Similarly, file_put_contents() can write data without manually calling fopen(), fwrite(), and fclose().
example: 
file_put_contents(
    "student.txt",
    "Name: Ram"
);

#Renaming a File
example:
rename(
    "student.txt",
    "students.txt"
);

#Copying a File
example:
copy(
    "student.txt",
    "student_backup.txt"
);


#Checking Whether a File Exists
Use file_exists().
example: 
if (file_exists("student.txt")) {
    echo "File exists.";
} else {
    echo "File does not exist.";
}

#Deleting a File
Use the unlink() function.
example:
if (file_exists("student.txt")) {
    unlink("student.txt");
    echo "File deleted.";
}



*/
?>