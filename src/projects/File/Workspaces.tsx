import React, { useContext } from 'react';
import styles from './File.module.css';
import { classNames } from '../../util';
import { IconButton } from '../../atoms/Button/IconButton';
import { AddIcon } from '../../atoms/Icons';
import { WorkspaceName } from './WorkspaceName';
import { WorkspaceContext } from '../../context/workspace/WorkspaceContext';
import { ScrollContainer } from '../../atoms/ScrollContainer';

export const Workspaces: React.FC = () => {
  const { workspaces, selectedItem, setSelectedItem, dispatcher } = useContext(WorkspaceContext);

  return (
    <div>
      <div className={styles.head}>
        <div className={styles.headText}>workspace</div>
        <IconButton
          className={styles.addWorkspaceIcon}
          onClick={dispatcher.addWorkspace}
          popOver={'新規ワークスペース'}
        >
          <AddIcon />
        </IconButton>
      </div>
      <ScrollContainer className={classNames(styles.scroll, styles.workspace)}>
        {workspaces.map((it, i) => (
          <WorkspaceName
            key={i}
            workspace={it}
            onClick={() => setSelectedItem(it)}
            selected={selectedItem.item.id === it.id}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};
