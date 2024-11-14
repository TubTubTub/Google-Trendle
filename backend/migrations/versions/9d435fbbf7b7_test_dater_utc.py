"""test dater utc

Revision ID: 9d435fbbf7b7
Revises: ebea6be7c56b
Create Date: 2024-11-10 14:40:51.823636

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9d435fbbf7b7'
down_revision = 'ebea6be7c56b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.add_column(sa.Column('updated_dt', sa.DateTime(timezone=True), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.drop_column('updated_dt')

    # ### end Alembic commands ###