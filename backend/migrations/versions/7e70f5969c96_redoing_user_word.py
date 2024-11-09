"""redoing user_word

Revision ID: 7e70f5969c96
Revises: c644bce198f9
Create Date: 2024-11-08 19:15:12.960826

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7e70f5969c96'
down_revision = 'c644bce198f9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_word',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.String(length=23), nullable=True),
    sa.Column('word_id', sa.String(length=128), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['word_id'], ['word.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_word')
    # ### end Alembic commands ###