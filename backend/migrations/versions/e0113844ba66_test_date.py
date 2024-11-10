"""test date

Revision ID: e0113844ba66
Revises: 1c85c764cb1e
Create Date: 2024-11-10 14:39:38.287764

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e0113844ba66'
down_revision = '1c85c764cb1e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('test',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.drop_column('updated_dt')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.add_column(sa.Column('updated_dt', sa.VARCHAR(length=64), autoincrement=False, nullable=False))

    op.drop_table('test')
    # ### end Alembic commands ###
