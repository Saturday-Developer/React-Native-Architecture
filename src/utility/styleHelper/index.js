/**
 * Global App Styles
 */

import { StyleSheet } from 'react-native';


/* Styles ==================================================================== */
export default StyleSheet.create({
    /* Default */
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    containerCentered: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    sectionCentered: { justifyContent: 'center', alignItems: 'center' },

    /* Aligning items */
    rightAligned: { alignItems: 'flex-end' },
    leftAligned: { alignItems: 'flex-start' },
    topCenterAligned: { alignItems: 'center', justifyContent: 'flex-start' },
    bottomCenterAligned: { alignItems: 'center', justifyContent: 'flex-end' },

    /* Text Styles */
    strong: { fontWeight: '900' },

    /* Helper Text Styles */
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right' },
    textLeft: { textAlign: 'left' },

    /* General Spacing */
    spacer_5: { left: 0, right: 0, height: 1, marginTop: 5 },
    spacer_10: { left: 0, right: 0, height: 1, marginTop: 10 },
    spacer_15: { left: 0, right: 0, height: 1, paddingTop: 15 },
    spacer_20: { left: 0, right: 0, height: 1, marginTop: 20 },
    spacer_25: { left: 0, right: 0, height: 1, marginTop: 25 },
    spacer_30: { left: 0, right: 0, height: 1, marginTop: 30 },
    spacer_40: { left: 0, right: 0, height: 1, marginTop: 40 },

    /* Grid */
    row: { left: 0, right: 0, flexDirection: 'row' },
    col: { flexDirection: 'column' },
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },
    flex6: { flex: 6 },

    /* Forms */
    alignCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'nowrap',
    },

    /* Modal Styles */
    modalBaseStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
    },

    /* padding */
    p_5: { padding: 5 },
    p_10: { padding: 10 },
    p_15: { padding: 15 },
    p_20: { padding: 20 },
    p_25: { padding: 25 },
    p_30: { padding: 30 },

    p_t_5: { paddingTop: 5 },
    p_t_10: { paddingTop: 10 },
    p_t_15: { paddingTop: 15 },
    p_t_20: { paddingTop: 20 },
    p_t_25: { paddingTop: 25 },
    p_t_30: { paddingTop: 30 },

    p_r_5: { paddingEnd: 5 },
    p_r_10: { paddingEnd: 10 },
    p_r_15: { paddingEnd: 15 },
    p_r_20: { paddingEnd: 20 },
    p_r_25: { paddingEnd: 25 },
    p_r_30: { paddingEnd: 30 },

    p_b_5: { paddingBottom: 5 },
    p_b_10: { paddingBottom: 10 },
    p_b_15: { paddingBottom: 15 },
    p_b_20: { paddingBottom: 20 },
    p_b_25: { paddingBottom: 25 },
    p_b_30: { paddingBottom: 30 },
    p_b_40: { paddingBottom: 40 },

    p_l_5: { paddingStart: 5 },
    p_l_10: { paddingStart: 10 },
    p_l_15: { paddingStart: 15 },
    p_l_20: { paddingStart: 20 },
    p_l_25: { paddingStart: 25 },
    p_l_30: { paddingStart: 30 },

    /* margin */
    m_5: { margin: 5 },
    m_10: { margin: 10 },
    m_15: { margin: 15 },
    m_20: { margin: 20 },
    m_25: { margin: 25 },
    m_30: { margin: 30 },

    m_t_5: { marginTop: 5 },
    m_t_10: { marginTop: 10 },
    m_t_15: { marginTop: 15 },
    m_t_20: { marginTop: 20 },
    m_t_25: { marginTop: 25 },
    m_t_30: { marginTop: 30 },

    m_r_5: { marginEnd: 5 },
    m_r_10: { marginEnd: 10 },
    m_r_15: { marginEnd: 15 },
    m_r_20: { marginEnd: 20 },
    m_r_25: { marginEnd: 25 },
    m_r_30: { marginEnd: 30 },

    m_b_5: { marginBottom: 5 },
    m_b_10: { marginBottom: 10 },
    m_b_15: { marginBottom: 15 },
    m_b_20: { marginBottom: 20 },
    m_b_25: { marginBottom: 25 },
    m_b_30: { marginBottom: 30 },

    m_l_5: { marginStart: 5 },
    m_l_10: { marginStart: 10 },
    m_l_15: { marginStart: 15 },
    m_l_20: { marginStart: 20 },
    m_l_25: { marginStart: 25 },
    m_l_30: { marginStart: 30 },
});
