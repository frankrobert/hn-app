import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../redux/types';
import { Items } from '../../redux/Items';
import { Comments } from '../../redux/Comments';
import { IItem } from '../../redux/Items/types';
import { Dispatch } from 'redux';
import { SiteWrapper } from '../../layout/SiteWrapper';
import { isEmpty } from 'lodash';
import { CommentWriter } from '../../components/CommentWriter';
import { CommentList } from '../../components/CommentList';
import { ICommentsById } from '../../redux/Comments/types';

interface IStateProps {
  item: IItem;
  isLoading: boolean;
  comments: IItem[];
}

const mapStateToProps = (state: IState): IStateProps => {
  return {
    item: Items.selectors.currentItemSelector(state),
    isLoading: Items.selectors.isLoadingSelector(state),
    comments: Comments.selectors.commentsSelector(state),
  };
};

interface IDispatch {
  dispatch: Dispatch;
}

type IProps = IStateProps & IDispatch;

const handleGoTo: React.MouseEventHandler<HTMLInputElement> = (e): void => {
  e.preventDefault();
  e.stopPropagation();
  window.location.href = 'https://news.ycombinator.com/comment';
};

const CommentsPage: React.FunctionComponent<IProps> = (props: IProps) => {
  const { item, dispatch, isLoading, comments } = props;

  React.useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const currentItem = searchParams.get('id');

    if (!currentItem) {
      return;
    }

    dispatch(Items.actions.setCurrentItem(Number(currentItem)) as any);

    return () => dispatch(Items.actions.setCurrentItem(null) as any);
  }, []);

  React.useEffect(
    () => {
      if (isEmpty(item)) {
        return;
      }

      dispatch(Comments.actions.getAllById(item.kids) as any);
      return () => dispatch(Comments.actions.getAllById(null) as any);
    },
    [item]
  );

  return (
    <SiteWrapper>
      {isLoading || isEmpty(item) ? (
        <div>Loading...</div>
      ) : (
        <>
          <CommentWriter item={item} onGoTo={handleGoTo} />
          <br />
          <br />
          {isLoading || isEmpty(comments) ? (
            <div>Loading...</div>
          ) : (
            <CommentList comments={comments} item={item} />
          )}
          <br />
          <br />
        </>
      )}
    </SiteWrapper>
  );
};

const enhancedCommentsPage = connect(mapStateToProps)(CommentsPage);

export { enhancedCommentsPage as CommentsPage };
