"""changed user and word

Revision ID: 0191299baf2e
Revises: a8d961aad6a5
Create Date: 2024-11-06 19:55:33.316205

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0191299baf2e'
down_revision = 'a8d961aad6a5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.drop_column('id')

    # ### end Alembic commands ###
