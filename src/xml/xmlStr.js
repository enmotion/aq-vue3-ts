export var sample = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="diagram_PROCESS-L5VX75KF" targetNamespace="http://activiti.org/bpmn">
  <bpmn2:process id="PROCESS-L5VX75KF" name="未命名流程-L5VX75KG" isExecutable="true" engine="activiti">
    <bpmn2:startEvent id="Event_1b546j4" name="流程开始">
      <bpmn2:outgoing>Flow_1d7lxcl</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:sequenceFlow id="Flow_1d7lxcl" sourceRef="Event_1b546j4" targetRef="Activity_0wg3hno" />
    <bpmn2:userTask id="Activity_0wg3hno" name="发起人">
      <bpmn2:incoming>Flow_1d7lxcl</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1s51fbj</bpmn2:outgoing>
    </bpmn2:userTask>
    <bpmn2:task id="Activity_045wbwa" name="审核人">
      <bpmn2:incoming>Flow_0j1zhhm</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1n2gwhu</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:exclusiveGateway id="Gateway_1v036pc">
      <bpmn2:incoming>Flow_1s51fbj</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0j1zhhm</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_0pseuvh</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="Flow_1s51fbj" sourceRef="Activity_0wg3hno" targetRef="Gateway_1v036pc" />
    <bpmn2:sequenceFlow id="Flow_0j1zhhm" sourceRef="Gateway_1v036pc" targetRef="Activity_045wbwa" />
    <bpmn2:endEvent id="Event_1ghhf15" name="流程结束">
      <bpmn2:incoming>Flow_1n2gwhu</bpmn2:incoming>
      <bpmn2:incoming>Flow_1vhu1y1</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="Flow_1n2gwhu" sourceRef="Activity_045wbwa" targetRef="Event_1ghhf15" />
    <bpmn2:task id="Activity_0lzz1yk" name="汇签">
      <bpmn2:incoming>Flow_0pseuvh</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0fia63p</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_1tm8yty</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_002aus7</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_0ye6prk</bpmn2:outgoing>
      <bpmn2:multiInstanceLoopCharacteristics />
    </bpmn2:task>
    <bpmn2:sequenceFlow id="Flow_0pseuvh" sourceRef="Gateway_1v036pc" targetRef="Activity_0lzz1yk" />
    <bpmn2:task id="Activity_1fh2ka7" name="委员1">
      <bpmn2:incoming>Flow_0fia63p</bpmn2:incoming>
      <bpmn2:outgoing>Flow_04q7vp7</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_0m03s4p" name="委员2">
      <bpmn2:incoming>Flow_1tm8yty</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1173nfy</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_1vkp8g6" name="委员3">
      <bpmn2:incoming>Flow_002aus7</bpmn2:incoming>
      <bpmn2:outgoing>Flow_08mnik6</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_0hgana1" name="委员4">
      <bpmn2:incoming>Flow_0ye6prk</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0xo9mxq</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="Flow_0fia63p" sourceRef="Activity_0lzz1yk" targetRef="Activity_1fh2ka7" />
    <bpmn2:sequenceFlow id="Flow_1tm8yty" sourceRef="Activity_0lzz1yk" targetRef="Activity_0m03s4p" />
    <bpmn2:sequenceFlow id="Flow_002aus7" sourceRef="Activity_0lzz1yk" targetRef="Activity_1vkp8g6" />
    <bpmn2:sequenceFlow id="Flow_0ye6prk" sourceRef="Activity_0lzz1yk" targetRef="Activity_0hgana1" />
    <bpmn2:scriptTask id="Activity_0rluymx" name="消息发送">
      <bpmn2:incoming>Flow_04q7vp7</bpmn2:incoming>
      <bpmn2:incoming>Flow_1173nfy</bpmn2:incoming>
      <bpmn2:incoming>Flow_08mnik6</bpmn2:incoming>
      <bpmn2:incoming>Flow_0xo9mxq</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1vhu1y1</bpmn2:outgoing>
    </bpmn2:scriptTask>
    <bpmn2:sequenceFlow id="Flow_04q7vp7" sourceRef="Activity_1fh2ka7" targetRef="Activity_0rluymx" />
    <bpmn2:sequenceFlow id="Flow_1173nfy" sourceRef="Activity_0m03s4p" targetRef="Activity_0rluymx" />
    <bpmn2:sequenceFlow id="Flow_08mnik6" sourceRef="Activity_1vkp8g6" targetRef="Activity_0rluymx" />
    <bpmn2:sequenceFlow id="Flow_0xo9mxq" sourceRef="Activity_0hgana1" targetRef="Activity_0rluymx" />
    <bpmn2:sequenceFlow id="Flow_1vhu1y1" sourceRef="Activity_0rluymx" targetRef="Event_1ghhf15" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS-L5VX75KF">
      <bpmndi:BPMNEdge id="Flow_1d7lxcl_di" bpmnElement="Flow_1d7lxcl">
        <di:waypoint x="168" y="90" />
        <di:waypoint x="240" y="90" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1s51fbj_di" bpmnElement="Flow_1s51fbj">
        <di:waypoint x="340" y="90" />
        <di:waypoint x="425" y="90" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0j1zhhm_di" bpmnElement="Flow_0j1zhhm">
        <di:waypoint x="475" y="90" />
        <di:waypoint x="590" y="90" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1n2gwhu_di" bpmnElement="Flow_1n2gwhu">
        <di:waypoint x="690" y="90" />
        <di:waypoint x="812" y="90" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0pseuvh_di" bpmnElement="Flow_0pseuvh">
        <di:waypoint x="450" y="115" />
        <di:waypoint x="450" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1vhu1y1_di" bpmnElement="Flow_1vhu1y1">
        <di:waypoint x="450" y="710" />
        <di:waypoint x="450" y="750" />
        <di:waypoint x="830" y="750" />
        <di:waypoint x="830" y="108" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0fia63p_di" bpmnElement="Flow_0fia63p">
        <di:waypoint x="400" y="300" />
        <di:waypoint x="270" y="300" />
        <di:waypoint x="270" y="450" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1tm8yty_di" bpmnElement="Flow_1tm8yty">
        <di:waypoint x="430" y="340" />
        <di:waypoint x="430" y="395" />
        <di:waypoint x="390" y="395" />
        <di:waypoint x="390" y="450" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_002aus7_di" bpmnElement="Flow_002aus7">
        <di:waypoint x="470" y="340" />
        <di:waypoint x="470" y="395" />
        <di:waypoint x="510" y="395" />
        <di:waypoint x="510" y="450" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ye6prk_di" bpmnElement="Flow_0ye6prk">
        <di:waypoint x="500" y="300" />
        <di:waypoint x="630" y="300" />
        <di:waypoint x="630" y="450" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_04q7vp7_di" bpmnElement="Flow_04q7vp7">
        <di:waypoint x="270" y="530" />
        <di:waypoint x="270" y="670" />
        <di:waypoint x="400" y="670" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1173nfy_di" bpmnElement="Flow_1173nfy">
        <di:waypoint x="390" y="530" />
        <di:waypoint x="390" y="580" />
        <di:waypoint x="450" y="580" />
        <di:waypoint x="450" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_08mnik6_di" bpmnElement="Flow_08mnik6">
        <di:waypoint x="510" y="530" />
        <di:waypoint x="510" y="580" />
        <di:waypoint x="450" y="580" />
        <di:waypoint x="450" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0xo9mxq_di" bpmnElement="Flow_0xo9mxq">
        <di:waypoint x="630" y="530" />
        <di:waypoint x="630" y="670" />
        <di:waypoint x="500" y="670" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_1b546j4_di" bpmnElement="Event_1b546j4">
        <dc:Bounds x="132" y="72" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="128" y="115" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0xkz98w_di" bpmnElement="Activity_0wg3hno">
        <dc:Bounds x="240" y="50" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_045wbwa_di" bpmnElement="Activity_045wbwa">
        <dc:Bounds x="590" y="50" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1v036pc_di" bpmnElement="Gateway_1v036pc" isMarkerVisible="true">
        <dc:Bounds x="425" y="65" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1ghhf15_di" bpmnElement="Event_1ghhf15">
        <dc:Bounds x="812" y="72" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="808" y="48" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0lzz1yk_di" bpmnElement="Activity_0lzz1yk">
        <dc:Bounds x="400" y="260" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1fh2ka7_di" bpmnElement="Activity_1fh2ka7">
        <dc:Bounds x="220" y="450" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0m03s4p_di" bpmnElement="Activity_0m03s4p">
        <dc:Bounds x="340" y="450" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1vkp8g6_di" bpmnElement="Activity_1vkp8g6">
        <dc:Bounds x="460" y="450" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0hgana1_di" bpmnElement="Activity_0hgana1">
        <dc:Bounds x="580" y="450" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_12ug72b_di" bpmnElement="Activity_0rluymx">
        <dc:Bounds x="400" y="630" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>
`