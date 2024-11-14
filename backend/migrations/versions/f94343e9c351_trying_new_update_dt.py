"""Trying new update-dt

Revision ID: f94343e9c351
Revises: cfa01028e136
Create Date: 2024-11-10 14:32:56.498891

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f94343e9c351'
down_revision = 'cfa01028e136'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.alter_column('updated_dt',
               existing_type=sa.VARCHAR(length=64),
               type_=sa.DateTime(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_word', schema=None) as batch_op:
        batch_op.alter_column('updated_dt',
               existing_type=sa.DateTime(),
               type_=sa.VARCHAR(length=64),
               existing_nullable=False)

    # ### end Alembic commands ###