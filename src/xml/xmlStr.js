export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始扯淡">
      <outgoing>SequenceFlow_0h21x7r</outgoing>
    </startEvent>
    <task id="Task_1hcentk" name="我是修改后的Task名称" isInterrupting="false" customProps="乱">
      <incoming>SequenceFlow_0h21x7r</incoming>
      <outgoing>Flow_13xm0pu</outgoing>
    </task>
    <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
    <exclusiveGateway id="Gateway_1l58ktz" name="发大发">
      <incoming>Flow_13xm0pu</incoming>
    </exclusiveGateway>
    <sequenceFlow id="Flow_13xm0pu" sourceRef="Task_1hcentk" targetRef="Gateway_1l58ktz" />
    <textAnnotation id="TextAnnotation_1g58gl1">
      <text>都得</text>
    </textAnnotation>
    <association id="Association_10pzst7" sourceRef="Gateway_1l58ktz" targetRef="TextAnnotation_1g58gl1" />
    <textAnnotation id="TextAnnotation_11oywvj">
      <text>测试的发顺丰</text>
    </textAnnotation>
    <association id="Association_0yunocn" sourceRef="Task_1hcentk" targetRef="TextAnnotation_11oywvj" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_13xm0pu_di" bpmnElement="Flow_13xm0pu">
        <omgdi:waypoint x="390" y="160" />
        <omgdi:waypoint x="390" y="355" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="340" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="149" y="145" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
        <omgdc:Bounds x="340" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1l58ktz_di" bpmnElement="Gateway_1l58ktz" isMarkerVisible="true">
        <omgdc:Bounds x="365" y="355" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="374" y="412" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_1g58gl1_di" bpmnElement="TextAnnotation_1g58gl1">
        <omgdc:Bounds x="420" y="270" width="100" height="30" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_11oywvj_di" bpmnElement="TextAnnotation_11oywvj">
        <omgdc:Bounds x="440" y="0" width="100" height="30" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_10pzst7_di" bpmnElement="Association_10pzst7">
        <omgdi:waypoint x="401" y="366" />
        <omgdi:waypoint x="457" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Association_0yunocn_di" bpmnElement="Association_0yunocn">
        <omgdi:waypoint x="428" y="80" />
        <omgdi:waypoint x="476" y="30" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`