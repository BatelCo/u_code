import time

#  the point where the time begins. For Unix system is the January 1, 1970, 00:00:00.
import time
print(time.time())
# Output: 1583755084.906643
print(time.ctime())
# Output: Mon Mar  9 13:58:04 2010

time.sleep(10)
# sleep suspends the calling thread for 10 seconds


print(1)
time.sleep(5)
print(2)
