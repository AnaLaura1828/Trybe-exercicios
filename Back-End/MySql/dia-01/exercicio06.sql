SELECT job_id, AVG(salary) 
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY job_id DESC;