import app.database.mock_data as MockData
from typing import Callable, Iterator, Optional
from psycopg import Connection

from app.models.auth import UserRegister
from app.models.users import UserUpdate
from app.database import get_db
from app.database.models import User, UserInDB
from app.security import manager, hash_password


@manager.user_loader(conn_provider=get_db)
def get_user_by_username(
    username,
    db: Optional[Connection] = None,
    conn_provider: Callable[[], Iterator[Connection]] = None,
) -> Optional[UserInDB]:
    """
    Queries the database for a user with the given name
    Args:
        name: The name of the user
        db: The currently active database connection
        conn_provider: Optional method to retrieve a connection if db is None (provided by our LoginManager)
    Returns:
        The user object or none
    """
    if db is None and conn_provider is None:
        raise ValueError("db and conn_provider cannot both be None.")

    if db is None:
        db = next(conn_provider())

    result = db.execute(
        "SELECT * FROM users WHERE username = %s;", (username,)
      ).fetchone()
    if result is None:
        return result
    user = UserInDB.parse_obj(result)
    return user

def get_users(db: Connection) -> list[User]:
    return MockData.get_users()


def get_user_by_id(user_id: str, db: Connection) -> User:
    return MockData.get_user_by_id(user_id)

def get_courses(major: str, db: Connection) -> List[str]:
    

def create_user(newUser: UserRegister, db: Connection) -> User:
    password_hash = hash_password(newUser.password)
    id = db.execute(
        """
        INSERT INTO users (username, password_hash, full_name)
        VALUES (%s, %s, %s)
        RETURNING id;
        """,
        (newUser.username, password_hash, newUser.full_name),
    ).fetchone()["id"]
    return User(id=id, username=newUser.username, full_name=newUser.full_name)


def update_user(user_id: str, user: UserUpdate, db: Connection) -> User:
    user_id = UUID(user_id)
    if user.password is not None:
        user.password_hash = hash_password(user.password)
        user.password = None
    user_dict = user.dict(exclude_none=True)
    query = sql.SQL("UPDATE users SET {data} WHERE id={id};").format(
        data=sql.SQL(", ").join(
            sql.Composed([sql.Identifier(k), sql.SQL(" = "), sql.Placeholder(k)])
            for k in user_dict.keys()
        ),
        id=user_id,
    )
    db.execute(query, user_dict)
    user = get_user_by_id(user_id, db)
    return



def delete_user(user_id: str, db: Connection):
    return MockData.delete_user(user_id)

def extract_names(courses: str):
    return str.split(",")

def generate_plan(str:major, db: Connection, coop: bool, sequence: Optional[int]): 
  

  

  
  


  return json xd