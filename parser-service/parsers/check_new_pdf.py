import operator
from stat import ST_CTIME
import os, sys, time
path = str(os.getcwd()) + '/' ;  #or you can assign the return value of your 
                                 #function (the updated path as per your question) 
                                 #which operates on the file 'new_file'  to this variable. 
files = os.listdir(path);

def mostRecentFile(path):
    all_files = os.listdir(path);
    file_ctime = dict();
    for file in all_files:
        file_times[e] = time.time() - os.stat(e).st_mtime;
    return  sorted(file_times.items(), key=operator.itemgetter(1))[0][0]

new_file = mostRecentFile(path)