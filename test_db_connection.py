import os
import psycopg

pg_conn_string = os.environ["DATABASE_URL"]

# Test Psycopg

# conn = psycopg.connect(dbname="defaultdb", user="Lanney" , password="113PPuwL4ZwFxVPeGjhsCg" , host="windy-being-5473.g8z.cockroachlabs.cloud", port="26257")
# conn = psycopg.connect(os.environ["DATABASE_URL"])

with psycopg.connect(dbname="defaultdb", user="Lanney" , password="113PPuwL4ZwFxVPeGjhsCg" , host="windy-being-5473.g8z.cockroachlabs.cloud", port="26257") as conn:

    # Open a cursor to perform database operations
    with conn.cursor() as cur:

        # Execute a command: this creates a new table
        # cur.execute("""
        #     CREATE TABLE test (
        #         id serial PRIMARY KEY,
        #         num integer,
        #         data text)
        #     """)

        # Pass data to fill a query placeholders and let Psycopg perform
        # the correct conversion (no SQL injections!)
        # cur.execute(
        #     "INSERT INTO test (num, data) VALUES (%s, %s)",
        #     (100, "abc'def"))

        # Query the database and obtain data as Python objects.
        cur.execute("SELECT * FROM test").fetchone()
        # will return (1, 100, "abc'def")

        # You can use `cur.fetchmany()`, `cur.fetchall()` to return a list
        # of several records, or even iterate on the cursor
        for record in cur:
            print(record)

        # Make the changes to the database persistent
        conn.commit()
# res =  conn.execute("SELECT now()").fetchall()
# conn.commit()
# print(res)