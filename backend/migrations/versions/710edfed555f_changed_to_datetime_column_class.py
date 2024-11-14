"""changed to datetime column class

Revision ID: 710edfed555f
Revises: 6fcee1072c60
Create Date: 2024-11-10 14:23:23.283210

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '710edfed555f'
down_revision = '6fcee1072c60'
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