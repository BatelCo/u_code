import json
import os

# with open('C:\\Users\\Rent\\Desktop\\u_code\\exercises\\week5\\sets\\nyc_jobs.json') as file:
script_dir = os.path.dirname(__file__)
rel_path = "nyc_jobs.json"
abs_file_path = os.path.join(script_dir, rel_path)
with open(abs_file_path) as file:
    jobs_data_from_json = json.load(file)
# print(data)


# Search in Description

def find_jobs_by_word(word):
    return [job for job in jobs_data_from_json if word in job.get("job_description")]


print(len(find_jobs_by_word("experience")))  # 165

# Junior Jobs in Brooklin
# Find out which agencies offers at least 1 Entry-Level job and at least 1 job that is located in Broadway.
entry_level_jobs = set(
    [job["agency"] for job in jobs_data_from_json if job["career_level"] == "Entry-Level"])
not_in_brooklin = set(
    [job["agency"] for job in jobs_data_from_json if "Broadway" in job["work_location"]])

result = (entry_level_jobs & not_in_brooklin)

print("broadway", result)


# Max Hourly Salary
# Find out what is the max salary for jobs that are hourly but not Entry-Level.

hourly = set([job["salary_range_to"]
             for job in jobs_data_from_json if job["salary_frequency"] == "Hourly"])
entry_level = set([job["salary_range_to"]
                  for job in jobs_data_from_json if job["career_level"] != "Entry-Level"])
res = hourly & entry_level
print("max", max(res))


# Salaries in Range
# Find out what are the agencies that offers jobs with salaries in the range of 17 to 21.

def is_in_range(job, from_, to):
    is_above_min = float(job.get("salary_range_from")) >= from_
    is_below_max = float(job.get("salary_range_to")) <= to
    return is_above_min and is_below_max


salary_min = 17
salary_max = 18
agencies_in_range = [job["agency"] for job in jobs_data_from_json if is_in_range(
    job, salary_min, salary_max)]
print("in range", (set(agencies_in_range)))
