from flask import render_template, Blueprint, redirect, url_for
from markupsafe import escape
from ..db.db import db
from ..models.UserApp import UserApp


user_account = Blueprint('user_account', __name__, template_folder='templates')


@user_account.get('/<string:email>')
def user_account_get(email):
    email = escape(email)
    # Search user from email slug in database
    try:
        current_user: UserApp = db.session.execute(db.select(UserApp).filter_by(email=email)).scalar_one()
    except: 
        return redirect(url_for('index.index_get'))
    # Return user account with information
    return render_template('user_account.html', current_user=current_user)


