import * as React from 'react';
import { SiteWrapper } from '../../layout/SiteWrapper';
import { connect } from 'react-redux';
import { IState, IAction } from '../../redux/types';
import { Dispatch } from 'redux';
import { ItemList } from '../../components/ItemList';
import { IItem } from '../../redux/Items/types';
import { Items } from '../../redux/Items';
import { isEmpty } from 'lodash';

interface IStateProps {
  items: IItem[];
  isLoading: boolean;
  page: number;
  pageSize: number;
}

const mapStateToProps = (state: IState): IStateProps => ({
  items: Items.selectors.itemsSelector(state),
  isLoading: Items.selectors.isLoadingSelector(state),
  page: Items.selectors.pageSelector(state),
  pageSize: state.items.pageSize,
});

interface IDispatch {
  dispatch: Dispatch<IAction>;
}

type IComponentProps = IStateProps & IDispatch;

const AskPage: React.FunctionComponent<IComponentProps> = (
  props: IComponentProps
) => {
  const { items, isLoading, dispatch, page, pageSize } = props;

  React.useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const currentPage = searchParams.get('page');

    if (!currentPage) {
      return;
    }

    dispatch(Items.actions.setPage(Number(currentPage)));
  }, []);

  React.useEffect(
    () => {
      dispatch(Items.actions.getAllStoriesByType('ask', page));
    },
    [page]
  );

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (): void => {
    dispatch(Items.actions.setPage(page + 1));
  };

  const handleSetCurrentItem: React.MouseEventHandler<
    HTMLAnchorElement
  > = () => (id: number): void => {
    dispatch(Items.actions.setCurrentItem(id))
  };

  return (
    <SiteWrapper>
      {isLoading || isEmpty(items) ? (
        <div>Loading...</div>
      ) : (
        <ItemList
          items={items}
          page={page}
          pageSize={pageSize}
          onClick={handleClick}
          setCurrentItem={handleSetCurrentItem}
        />
      )}
    </SiteWrapper>
  );
};

const enhancedAskPage = connect(mapStateToProps)(AskPage);

export { enhancedAskPage as AskPage };
