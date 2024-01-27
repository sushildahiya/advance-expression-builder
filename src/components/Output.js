import React, { useState } from 'react'
import styles from './output.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import { useValue } from '../context/expressionContext';
function Output() {
    const [copied, setCopied] = useState(false)
    const {expression} = useValue()
    /**
     * Handling click on copy button to copy expression to clipboard
     */
    const handleCopyClick = () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    
  return (
    <div className={styles.outputContainer} >
    <h3>JSON Output</h3>
    <div className={styles.outputContent}>
      <div className={styles.copyBtn}>
        <CopyToClipboard text={JSON.stringify(expression, null, 2)} onCopy={handleCopyClick}>
          <Button className={`${styles.button} d-flex`} variant="outline-secondary" size="sm">
            {copied ? 'Copied' :'Copy' }
          </Button>
        </CopyToClipboard>
      </div>
      <div className={styles.outputBox}>
        <pre>{JSON.stringify(expression, null, 5)} </pre>
      </div>
    </div>
  </div>
  )
}

export default Output