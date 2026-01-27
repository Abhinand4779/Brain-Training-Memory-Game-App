# Brain Trainer Backend

This is the Django backend for the Brain Training Memory Game App.

## Setup

1.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
    (You may need to create a `requirements.txt` from the installed packages: `pip freeze > requirements.txt`)

2.  **Run Migrations**:
    ```bash
    python manage.py migrate
    ```

3.  **Seed Games**:
    ```bash
    python seed_games.py
    ```

4.  **Run Server**:
    ```bash
    python manage.py runserver
    ```

## API Endpoints

### Authentication
-   **Register**: `POST /api/register/`
    -   Body: `{ "username": "...", "email": "...", "password": "..." }`
-   **Login**: `POST /api/login/`
    -   Body: `{ "username": "...", "password": "..." }`
    -   Returns: `{ "token": "...", "user_id": ..., ... }`

### Games
-   **List Games**: `GET /api/games/`
-   **Submit Score**: `POST /api/submit-score/`
    -   Header: `Authorization: Token <your_token>`
    -   Body:
        ```json
        {
            "game_slug": "card-matching",
            "score": 100,
            "time_taken": 45,
            "moves": 12
        }
        ```

### Stats
-   **User Stats**: `GET /api/stats/`
    -   Header: `Authorization: Token <your_token>`
    -   Returns aggregated statistics for the dashboard.
